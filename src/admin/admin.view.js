import * as domutils from '../utilities/domutils';
import * as validations from '../utilities/common_validations';
import * as modalService from '../utilities/modal_messaging';

export default class AdminView {

    constructor() {
        this.domutils = domutils;
        this.validations = validations;
        this.modalService = modalService;
        this.adminContainer = document.getElementById('adminContainer');
        this.dashContainer = document.getElementById('dashContainer');
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
        this.loginBtn = document.getElementById('loginBtn');
    }

    addListener(id, event, callback) {
        this.domutils.attachListener(id, event, callback);
    }

    processLoginForm() {
        let username = this.username.value;
        let password = this.password.value;

        if (username === '' || password === '') {
            this.modalService.buildMessage('warning', 'fields cannot be blank', this.adminContainer);
        } else {
            return {
                'username': username,
                'password': password
            };
        }
    }

    processEntryForm() {
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let body = document.getElementById('entry').value;
        if (!(title || date || body)) {
            this.modalService.buildMessage('warning', 'fields cannot be blank');
        } else {
            let entry = {
                date: date,
                title: title,
                entry: body
            };
            return entry;
        }
    }

    loadDashView() {
        return new Promise((resolve) => {
            this.domutils.loadView('dashboard').then(res => {
                this.dashContainer.innerHTML = res;
                this.dashContainer.classList.add('dashboard__container-visible');
                this.attachValidationListeners(['title', 'date', 'entry']);
                resolve();
            }).catch(err => {
                console.log('error: ', err);
            });
        });
    }

    alertSuccess(data) {
        this.modalService.buildMessage('valid', data.message);
        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('entry').value = '';
    }

    attachValidationListeners(identifiers) {
        for (let id of identifiers) {
            this.addListener(id, 'focus', e => {
                e.target.classList.add('focused');
            });
            this.addListener(id, 'blur', e => {
                e.target.classList.remove('focused');
                this.checkValidity(e.target);
            });
        }
    }

    checkValidity(el) {
        let entrySubmitBtn = document.getElementById('entrySubmitBtn');
        if (el.id === 'title') {
            if (!this.validations.validateAgainstPattern('title', el.value)) {
                if (el.classList.contains('valid')) {
                    el.classList.remove('valid');
                }
                el.classList.add('invalid');
                let msg = this.validations.messages['titleInvalid'];
                this.domutils.displayValidationMessage('titleValidationMessage', msg);
                entrySubmitBtn.disabled = true;
            } else {
                if (el.classList.contains('invalid')) {
                    el.classList.remove('invalid');
                }
                el.classList.add('valid');
                this.domutils.hideValidationMessage('titleValidationMessage');
                entrySubmitBtn.disabled = false;
            }
        }
        if (el.id === 'date') {
            if (!this.validations.validateAgainstPattern('date', el.value)) {
                if (el.classList.contains('valid')) {
                    el.classList.remove('valid');
                }
                el.classList.add('invalid');
                let msg = this.validations.messages['dateInvalid'];
                this.domutils.displayValidationMessage('dateValidationMessage', msg);
                entrySubmitBtn.disabled = true;
            } else {
                if (el.classList.contains('invalid')) {
                    el.classList.remove('invalid');
                }
                el.classList.add('valid');
                this.domutils.hideValidationMessage('dateValidationMessage');
                entrySubmitBtn.disabled = false;
            }
        }
    }

}