// This is your entry file. Import your primary app.js file here.
import Router from './routes/router';
import Route from './routes/route';

window.onload = () => {
    let router = new Router([
        new Route('client', 'client', true),
        new Route('admin', 'admin')
    ]);
};