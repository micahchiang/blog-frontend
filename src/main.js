// This is your entry file. Import your primary app.js file here.
import Router from './routes/router';
import Route from './routes/route';
import BlogController from './client/blog.controller';

window.onload = () => {
    let router = new Router([
        new Route('home', 'client', true),
        new Route('admin', 'admin')
    ]);
    let blogController = new BlogController();
}