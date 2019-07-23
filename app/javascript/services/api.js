import axios from 'axios';

const api = axios.create({
    baseURL: process.env.COINS_URL
});

export default api;