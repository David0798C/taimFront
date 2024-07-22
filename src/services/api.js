import axios from 'axios';

export const instance = axios.create({ baseURL: 'https://taimback.onrender.com' });

// export const instance = axios.create({ baseURL: 'http://localhost:8080' });

export const setAuth = (username, password) => {

    const token = btoa(`${username}:${password}`);
    instance.defaults.headers.common.Authorization = `basic ${token}`;
};