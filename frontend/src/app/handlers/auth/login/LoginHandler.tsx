import type {JSX} from "react";

export default class LoginHandler
{
    public static getElement(middleware: ((el: JSX.Element) => JSX.Element)[] = []) {
        const element = <h1 className="text-3xl font-bold underline">LoginPage</h1>;
        return this.setMiddleware(element, middleware);
    }

    public static setMiddleware(element: JSX.Element, middleware: ((el: JSX.Element) => JSX.Element)[]) {
        return middleware.reduce((el, fn) => fn(el), element);
    }
}