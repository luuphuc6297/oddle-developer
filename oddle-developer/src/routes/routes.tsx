import React, { Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';

const NotFound = React.lazy(() => import('layouts/NotFound'));
const UserRepoContainer = React.lazy(() => import('containers/UserRepo'));
const SearchContainer = React.lazy(() => import('containers/Search'));
const Users = React.lazy(() => import('containers/Users'));

export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: (
            <Suspense>
                <SearchContainer />
            </Suspense>
        ),
        children: [
            {
                path: '/users',
                element: (
                    <Suspense>
                        <Users />
                    </Suspense>
                ),
            },
            {
                path: '/users/:username',
                element: (
                    <Suspense>
                        <UserRepoContainer />
                    </Suspense>
                ),
            },
            { path: '*', element: <NotFound /> },
        ],
    },
];
