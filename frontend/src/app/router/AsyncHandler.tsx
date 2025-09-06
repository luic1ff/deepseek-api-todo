import React, {useEffect, useState, type JSX, useMemo} from 'react';

interface AsyncHandlerProps {
    handler: { getElement: (middleware: ((el: React.JSX.Element) => React.JSX.Element)[] | undefined) => Promise<React.JSX.Element> };
    middleware?: ((el: JSX.Element) => JSX.Element)[];
}

export const AsyncHandler = ({ handler, middleware = [] }: AsyncHandlerProps) => {
    const [element, setElement] = useState<JSX.Element | null>(null);

    const memoMiddleware = useMemo(() => middleware, []);

    useEffect(() => {
        handler.getElement(memoMiddleware).then(setElement);
    }, [memoMiddleware]);

    if (!element) return <div>Loading...</div>;
    return element;
};
