import HomeHandler from '../../handlers/home/HomeHandler';
import LoginHandler from '../../handlers/auth/login/LoginHandler';
import { AsyncHandler } from '../AsyncHandler';

export const routes = [
    {
        path: '/',
        element: <AsyncHandler handler={HomeHandler} />,
    },
    {
            path: '/login',
            element: LoginHandler.getElement(),
    },
    {
            path: '/about',
            element: <h1>About Page</h1>,
    },
];
