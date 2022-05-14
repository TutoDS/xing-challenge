import axios from 'axios';

// Get variables from .env file
const { VITE_API_URL } = import.meta.env;

const api = axios.create({
	baseURL: `${VITE_API_URL}`
});

export default api