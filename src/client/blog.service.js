import BackendService from '../backend.service';

export default class BlogService {

    constructor() {
        this.backendService = new BackendService();
    }

    retrieveEntries() {
        return new Promise((resolve, reject) => {
            let data = this.backendService.retrieveEntries();
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    }
}