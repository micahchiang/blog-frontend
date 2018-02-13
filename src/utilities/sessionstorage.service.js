export default class SessionStorage {

    constructor() {
        this.sessionStorage = window.sessionStorage;
        // let liveEntries;

        // this.getSessionStorage = () => {
        //     return liveEntries || JSON.parse(sessionStorage.getItem(name) || '[]');
        // };
        //
        // this.setSessionStorage = (entries) => {
        //     sessionStorage.setItem(name, JSON.stringify(liveEntries = entries));
        // };
    }

    getSessionStorage(key) {
        return JSON.parse(this.sessionStorage.getItem(key) || '[]');
    }

    setSessionStorage(key, data) {
        this.sessionStorage.setItem(key, JSON.stringify(data));
    }
}