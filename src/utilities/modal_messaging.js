export default class ModalMessaging {

    constructor(type,message) {
        this.type = type;
        this.message = message;
        this.init();
    }

    init() {
        this.buildMessage(this.type, this.title, this.message);
    }

    buildMessage(type,message) {
        let el = document.createElement('div');
        let childEl = document.createElement('p');
        childEl.innerText = message;
        switch(type) {
            case 'general':
                el.classList.add('general');
            case 'valid':
                el.classList.add('valid');
            case 'warning':
                el.classList.add('warning');
            default:
                el.classList.add('general');
        }
        el.classList.add('modal__message-container');
        el.appendChild(childEl);
        setTimeout(() => {
            this.showMessage(el);
        }, 2500);
    }

    showMessage(element) {
        element.classList.add('visible');
        document.appendChild(element);
    }
}