import React, { Key, Suspense } from 'react';
import { Route, RouteObject, Routes } from 'react-router-dom';
import { appRoutes } from './routes';

const RouteWithFallback = ({ element: Element, ...props }: any) => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Element {...props} />
        </Suspense>
    );
};

const renderRoutes = (routes: RouteObject[]) => {
    return routes
        .map(({ path, children, index = false, ...props }: RouteObject, key: Key | null | undefined) => {
            if (children) {
                return (
                    <Route key={key} path={path} index={index} element={<RouteWithFallback {...props} />}>
                        {renderRoutes(children)}
                    </Route>
                );
            }
            return <Route key={key} path={path} index={index} element={<RouteWithFallback {...props} />} />;
        })
        .filter((v) => v);
};

const AppRoutes = () => {
    return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRoutes;
