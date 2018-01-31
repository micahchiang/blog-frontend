export default class AdminService {

    constructor(backendService) {
        this.backendService = backendService;
    }

    login(data) {
        return new Promise((resolve, reject) => {
            let credentials = this.backendService.login(data);
            if (credentials) {
                resolve(credentials);
            } else {
                reject(Error('login error'));
            }
        });
    }

    processEntryForm(data) {
        return Promise.resolve(this.backendService.sendEntry(data).then(res => {
            return res;
        }));
    }
}