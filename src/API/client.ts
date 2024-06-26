import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    "Content-type": "application/json",
  },
});

export const fetcher = (url: string) => axiosClient.get(url).then(res => res.data);