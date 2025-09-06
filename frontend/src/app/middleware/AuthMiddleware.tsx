import { Navigate } from 'react-router-dom';
import type {JSX} from "react";

export const AuthMiddleware = (element: JSX.Element) => {
    const isLoggedIn = false;
    if (!isLoggedIn) return <Navigate to="/login" replace />;
    return element;
};
