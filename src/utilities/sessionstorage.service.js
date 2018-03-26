export default class SessionStorage {

    constructor() {
        this.sessionStorage = window.sessionStorage;
    }

    getSessionStorage(key) {
        return JSON.parse(this.sessionStorage.getItem(key) || '[]');
    }

    setSessionStorage(key, data) {
        this.sessionStorage.setItem(key, JSON.stringify(data));
    }
}