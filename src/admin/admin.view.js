import * as domutils from '../domutils';

export default class AdminView {

    constructor() {
        this.domutils = domutils;
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
            console.log('fields cannot be blank');
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
            console.log('fields cannot be blank');
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
                resolve();
            }).catch(err => {
                console.log('error: ', err);
            });
        });
    }

    alertSuccess(data) {
        alert(data.message);
        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('entry').value = '';
    }

}