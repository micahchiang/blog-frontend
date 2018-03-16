import AdminService from './admin.service';
import AdminView from './admin.view';
import * as modalService from '../utilities/modal_messaging';

export default class AdminController {

    constructor(backendService) {
        this.adminService = new AdminService(backendService);
        this.modalService = modalService;
        this.view = new AdminView();
        this.hookupLoginBtn();
    }

    login(data) {
        // send data to backend via adminservice;
        this.adminService.login(data).then(res => {
            // build dashboard.
            let data = JSON.stringify(res);
            this.view.loadDashView().then(() => {
                this.view.addListener('entrySubmitBtn', 'click', e => {
                    e.preventDefault();
                    let data = this.view.processEntryForm();
                    this.processEntryForm(data);
                });
            });
        }).catch(err => {
            // display some sort of message
            let error = JSON.stringify(err);
            if(error && error["status"] === 404) {
                this.modalService.buildMessage(
                    'warning',
                    'incorrect username or password.',
                    this.view.adminContainer
                );
            } else {
                this.modalService.buildMessage(
                    'warning',
                    'an error occurred, please try logging in again.',
                    this.view.adminContainer);
            }
        })
    }

    hookupLoginBtn() {
        this.view.addListener('loginBtn', 'click', e => {
            e.preventDefault();
            let data = this.view.processLoginForm();
            if(data) {
                this.login(data);
            }
        })
    }

    processEntryForm(data) {
        if (!data) {
            // display some sort of toastr, def not an alert...
            alert('Fields cannot be blank');
        } else {
            this.adminService.processEntryForm(data).then(res => {
                // send success msg to view and show toastr
                this.view.alertSuccess(res);
            });
        }
    }
}