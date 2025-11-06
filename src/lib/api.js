import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ophim1.com/v1/api',
  headers: {
    accept: 'application/json',
  },
});

export const fetcher = (url) => api.get(url).then(res => res.data);

export const fetchWithCache = async (url) => {
  const response = await fetch(`https://ophim1.com/v1/api${url}`, {
    next: { revalidate: 600 }, // Cache for 10 minutes
  });
  return response.json();
};

export default api;
