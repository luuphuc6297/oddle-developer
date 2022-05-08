import { useAppDispatch, useAppSelector } from 'app/hooks';
import { UserRepositories } from 'layouts';
import React from 'react';
import { useParams } from 'react-router-dom';
import { repositoryActions, selectRepositoryFilter, selectRepositoryList } from 'redux/slices/repository';
import { selectUser, userActions } from 'redux/slices/user';

const UserRepoContainer = () => {
    const filter = useAppSelector(selectRepositoryFilter);
    const user: any = useAppSelector(selectUser);
    const repositoryList = useAppSelector(selectRepositoryList);
    const { username } = useParams();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (username) {
            dispatch(userActions.fetchUserByUserName(username));
        }
    }, [dispatch, username]);

    React.useEffect(() => {
        if (user) {
            dispatch(repositoryActions.fetchRepositoryList({ ...filter, id: user[0]?.id }));
        }
        console.log('user___', user);
        console.log('repositoryList___', repositoryList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, filter, user, repositoryList]);

    return <UserRepositories />;
};

export default UserRepoContainer;
