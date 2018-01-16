// dom interaction goes in here.

export default class DomUtils {

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
        listItem.appendChild(title);
        listItem.appendChild(date);
        listItem.classList.add('blog__entry-list-item');
        this.insertListItem(listItem);
    }

    insertListItem(listItem) {
        this.entriesList.appendChild(listItem);
    }
}