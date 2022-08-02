import axios from "axios";

const api = axios.create({
  baseURL: "https://geo.ipify.org/api/v2/",
});

export default api;
