import { ListParams, ListResponse, User } from 'models';
import axiosClient from './axiosClient';

const userApi = {
    getAll(params: ListParams): Promise<ListResponse<User>> {
        const url = '/users';
        return axiosClient.get(url, { params });
    },
    getByUserName(username: string): Promise<User> {
        const url = `/users/${username}`;
        return axiosClient.get(url);
    },
    getById(id: string): Promise<User> {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
};

export default userApi;
