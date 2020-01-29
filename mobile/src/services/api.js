import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://192.168.25.7:19000',
});

export default api;