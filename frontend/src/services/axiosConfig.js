import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data; application/json"
  }
});

axiosConfig.interceptors.request.use(async (config) => config);
axiosConfig.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    alert(error.response.data.error)
  }
);

export default axiosConfig;
