export default class SessionStorage {

    constructor(name) {
        const sessionStorage = window.sessionStorage;
        let liveEntries;

        this.getSessionStorage = () => {
            return liveEntries || JSON.parse(sessionStorage.getItem(name) || '[]');
        };

        this.setSessionStorage = (entries) => {
            sessionStorage.setItem(name, JSON.stringify(liveEntries = entries));
        };
    }
}