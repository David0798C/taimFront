import axios from 'axios';

export const instance = axios.create ({baseURL: 'http://localhost:8080'});


export const setAuth = (username, password) => {
    instance.defaults.headers.common.Authorization = 'Basic ' + btoa(username + ':' + password);;
};