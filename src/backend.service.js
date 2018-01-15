
export default class BackendService {

    constructor() {}

     retrieveEntries() {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };
            fetch('http://localhost:3000/api/entries', options).then((res) => {
                return res.json();
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        })
    }
}