import SessionStorage from './sessionstorage.service';

export default class BackendService {

    constructor() {
        this.browserStorage = new SessionStorage();
    }

    retrieveEntries() {
        // check session storage before querying api
        let entries = this.browserStorage.getSessionStorage('blogEntries');
        if (entries && entries.length > 0) {
            return entries;
        } else {
            return new Promise((resolve, reject) => {
                let options = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
                };
                fetch('http://localhost:3000/api/entries', options).then((res) => {
                    return res.json();
                }).then(res => {
                    // set entries in session storage to reduce api querying.
                    this.browserStorage.setSessionStorage('blogEntries', res);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            })
        }
    }

    login(data) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            fetch('http://localhost:3000/admin/login', options).then(res => {
                return res.json();
            }).then(res => {
                if (res && res.status === 200) {
                    resolve(res);
                } else {
                    reject(res);
                }
            }).catch(err => {
                reject(err);
            })
        })
    }
}