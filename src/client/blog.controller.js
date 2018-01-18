import BlogService from './blog.service';
import BlogView from './blog.view';

export default class BlogController {

    constructor() {
        this.blogService = new BlogService();
        this.view = new BlogView();
        this.entries;
        this.retrieveEntries();
        this.hookUpCloseButton();
    }

    retrieveEntries() {
        this.blogService.retrieveEntries().then((data) => {
            this.entries = data;
            this.entries.forEach(entry => {
                this.view.buildListItem(entry);
                this.view.attachListener(entry._id, 'click', e => {
                    this.loadEntryData(e.currentTarget.id);
                });
            });
        });
    }

    loadEntryData(id) {
        let entry = this.entries.find(e => {
           return e._id === id;
        });
        this.view.loadEntryDisplay(entry);
    }

    hookUpCloseButton() {
        this.view.attachListener('entryCloseBtn', 'click', e => {
            this.view.removeEntryData();
        })
    }

}