import axios from 'axios';

export const instance = axios.create({ baseURL: 'https://taim-ruby.vercel.app/' });

export const setAuth = (username, password) => {

    const token = btoa(`${username}:${password}`);
    instance.defaults.headers.common.Authorization = `basic ${token}`;
};