import Aos from 'aos';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const UserRepoContainer = React.lazy(() => import('containers/UserRepo'));
const Users = React.lazy(() => import('containers/Users'));
const SearchContainer = React.lazy(() => import('containers/Search'));
const NotFound = React.lazy(() => import('layouts/NotFound'));
const MainLayout = React.lazy(() => import('layouts/MainLayout'));

function App() {
    React.useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<SearchContainer />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:username" element={<UserRepoContainer />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
