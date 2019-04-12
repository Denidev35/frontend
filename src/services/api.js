import axios from 'axios';

const api = axios.create({
	baseURL: 'https://app-omnistack-backend.herokuapp.com',
});

export default api;