import BlogService from './blog.service';
import DomUtils from './dom.utils';

export default class App {

    constructor() {
        this.blogService = new BlogService();
        this.domUtils = new DomUtils();
        this.entries;
        this.retrieveEntries();
    }

    retrieveEntries() {
        this.blogService.retrieveEntries().then((data) => {
            this.entries = data;
            this.entries.forEach(entry => {
                this.domUtils.buildListItem(entry);
            });
        })
    }


}