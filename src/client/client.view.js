// dom interaction goes in here.

export default class ClientView {

    constructor() {
        this.entriesContainer = document.getElementById('entriesContainer');
        this.entriesList = document.getElementById('entriesList');
    }

    buildListItem(entry) {
        let listItem = document.createElement('li');
        let title = document.createElement('h1');
        let date = document.createElement('p');
        listItem.setAttribute('id', entry._id);
        title.innerText = entry.title;
        title.classList.add('blog__entry-list-item-title');
        date.innerText = entry.date;
        date.classList.add('blog__entry-list-item-date');
        listItem.appendChild(date);
        listItem.appendChild(title);
        listItem.classList.add('blog__entry-list-item');
        this.insertListItem(listItem);
    }

    insertListItem(listItem) {
        this.entriesList.appendChild(listItem);
    }

    attachListener(id, listener, callback) {
        let el = document.getElementById(id);
        el.addEventListener(listener, callback);
    }

    loadEntryDisplay(entry) {
        let container = document.getElementById('entryContainer');
        let closeBtn = document.getElementById('entryCloseBtn');
        container.classList.contains('entry__container-visible') ?
        container.classList.remove('entry__container-visible') :
        container.classList.add('entry__container-visible');

        let title = document.createElement('h1');
        let date = document.createElement('p');
        let body = document.createElement('p');

        title.innerText = entry.title;
        title.classList.add('entry__display-title');
        date.innerText = entry.date;
        body.innerText = entry.entry;

        let display = document.getElementById('entryDisplay');
        display.appendChild(title);
        display.appendChild(date);
        display.appendChild(body);
        setTimeout(() => {
            display.classList.add('entry__display-visible');
            closeBtn.classList.add('close__btn-visible');
        }, 1000);
    }

    removeEntryData() {
        let container = document.getElementById('entryContainer');
        let closeBtn = document.getElementById('entryCloseBtn');
        let display = document.getElementById('entryDisplay');
        display.classList.remove('entry__display-visible');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        }
        closeBtn.classList.remove('close__btn-visible');
        setTimeout(() => {
            container.classList.remove('entry__container-visible');
        }, 500);
    }
}