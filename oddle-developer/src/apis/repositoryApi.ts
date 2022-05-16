import { ListParams, ListResponse, Repository } from 'models';
import axiosClient from './axiosClient';
const repositoryApi = {
    getAllRepoByUserId(params: ListParams): Promise<ListResponse<Repository>> {
        const { id, _page, _limit } = params;
        const url = `/users/${id}/repositories`;
        return axiosClient.get(url, { params: { _page, _limit } });
    },
};

export default repositoryApi;
