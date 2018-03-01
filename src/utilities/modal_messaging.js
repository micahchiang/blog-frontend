export default class ModalMessaging {

    constructor(type,title,message) {
        this.type = type;
        this.title = title;
        this.message = message;
        this.init();
    }

    init() {
        this.buildMessage(this.type, this.title, this.message);
    }

    buildMessage(type,title,message) {
        let el = document.createElement('div');
        let childEl = document.createElement('p');
    }
}