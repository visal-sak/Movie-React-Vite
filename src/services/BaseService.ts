import axios from 'axios'

const baseUrl: string = import.meta.env.VITE_BASE_API_URL
const apiKey: string = import.meta.env.VITE_API_KEY;

const api = () =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: apiKey,
    },
  })

export default api
