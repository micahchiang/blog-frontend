import Router from './routes/router';
import Route from './routes/route';
import BackendService from './utilities/backend.service';

window.onload = () => {
    let router = new Router([
        new Route('client', 'client', true),
        new Route('admin', 'admin')
    ], new BackendService());
};