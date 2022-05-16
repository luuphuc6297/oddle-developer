import { Box } from '@mui/material';
import { RepositoryCard, SideBar } from 'components';
import { Repository } from 'models';
import React from 'react';
interface IUserRepositories {
    repositories: Repository[];
}

const UserRepositories = ({ repositories }: IUserRepositories) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box>
                {repositories &&
                    repositories.map((repo) => (
                        <RepositoryCard
                            name={repo?.name}
                            status={repo.status}
                            description={repo.description}
                            language={repo.language}
                            updatedAt={repo.updatedAt}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default UserRepositories;
