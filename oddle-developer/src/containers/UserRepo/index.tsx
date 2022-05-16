import userApi from 'apis/userApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { UserRepositories } from 'layouts';
import React from 'react';
import { useParams } from 'react-router-dom';
import { repositoryActions, selectRepositoryFilter, selectRepositoryList } from 'redux/slices/repository';

const UserRepoContainer = () => {
    const filter = useAppSelector(selectRepositoryFilter);
    const [user, setUser] = React.useState<any>();
    const repositoryList = useAppSelector(selectRepositoryList);
    const { username } = useParams<{ username: string }>();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (username) {
            // IFFE
            (async () => {
                try {
                    const data: any = await userApi.getByUserName(username);
                    setUser(data.shift());
                } catch (error) {
                    console.log('Failed to fetch student details', error);
                }
            })();
        }
    }, [username]);

    React.useEffect(() => {
        if (user) {
            dispatch(repositoryActions.fetchRepositoryList({ ...filter, id: user.id }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, filter, user]);

    return <UserRepositories repositories={repositoryList} />;
};

export default UserRepoContainer;
