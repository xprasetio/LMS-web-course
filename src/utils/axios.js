import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
});

export default apiInstance;
