// This is your entry file. Import your primary app.js file here.
import BlogController from './client/blog.controller';

window.onload = () => {
   let blogController = new BlogController();
}