export default class ClientService {

    constructor(backendService) {
        this.backendService = backendService;
    }

    retrieveEntries() {
        return new Promise((resolve, reject) => {
            let data = this.backendService.retrieveEntries();
            if (data) {
                resolve(data);
            } else {
                reject(Error('Error retrieving entries'));
            }
        });
    }
}