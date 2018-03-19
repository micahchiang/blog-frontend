export let buildMessage = function (type, message, parent) {
    let el = document.createElement('div');
    let childEl = document.createElement('p');
    el.setAttribute('id', 'modalMessageContainer');
    el.classList.add('modal__message-container');
    childEl.innerText = message;
    switch (type) {
        case 'general':
            el.classList.add('general');
        case 'valid':
            el.classList.add('valid');
        case 'warning':
            el.classList.add('warning');
        default:
            el.classList.add('general');
    }
    el.appendChild(childEl);
    setTimeout(() => {
        this.showMessage(el, parent);
    }, 1000);
};

export let showMessage = function (element, parent) {
    element.classList.add('visible');
    parent.appendChild(element);
    setTimeout(() => {
        this.removeMessage(element, parent);
    }, 3500);
};

export let removeMessage = function (element, parent) {
    element.classList.add('transition__out');
    setTimeout(() => {
        parent.removeChild(element);
    }, 2500)
};