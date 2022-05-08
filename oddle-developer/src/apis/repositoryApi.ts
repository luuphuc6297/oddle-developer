import { ListParams, ListResponse, Repository } from 'models';
import axiosClient from './axiosClient';

const repositoryApi = {
    getAllRepoByUserId(payload: ListParams): Promise<ListResponse<Repository>> {
        const { id, filter } = payload;
        const url = `/users/${id}/repositories`;
        return axiosClient.get(url, { ...filter });
    },
};

export default repositoryApi;
