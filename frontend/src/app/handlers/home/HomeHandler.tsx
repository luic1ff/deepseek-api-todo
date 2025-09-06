import type { JSX } from "react";
import HomePage from "../../../pages/Home/HomePage.tsx";
import { getWeather } from "../../../features/weather";

export default class HomeHandler {
    public static async getElement(middleware: ((el: JSX.Element) => JSX.Element)[] = []): Promise<JSX.Element> {
        const data = await this.getData();

        const element = <HomePage weather={data} />;
        return this.setMiddleware(element, middleware);
    }

    protected static async getData(): Promise<{
        temperature: string;
        condition: string;
        forecast: string | { day: string; temp: number }[];
    }> {
        const weather = await getWeather("London");
        if (!weather) {
            return {
                temperature: '',
                condition: '',
                forecast: '',
            };
        }
        return weather;
    }

    public static setMiddleware(element: JSX.Element, middleware: ((el: JSX.Element) => JSX.Element)[]): JSX.Element {
        return middleware.reduce((el, fn) => fn(el), element);
    }
}