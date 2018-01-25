import AdminService from './admin.service';
import AdminView from './admin.view';

export default class AdminController {

    constructor(backendService) {
        this.adminService = new AdminService(backendService);
        this.view = new AdminView();
        this.hookupLoginBtn();
    }

    login(data) {
        // send data to backend via adminservice;
        this.adminService.login(data).then(res => {
            // build dashboard.
            let data = JSON.stringify(res);
            console.log('successfully logged in ' + data);
        }).catch(err => {
            // display some sort of message
            let error = JSON.stringify(err);
            console.log('an error occured: ' + error);
        })
    }

    hookupLoginBtn() {
        this.view.addListener('loginBtn', 'click', e => {
            e.preventDefault();
            let data = this.view.processLoginForm();
            this.login(data);
        })
    }
}