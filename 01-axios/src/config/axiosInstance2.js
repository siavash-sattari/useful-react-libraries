import axios from "axios";

const axiosInstance2 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance2.interceptors.request.use(
  (config) => {
    console.log("Config", config);
    return config;
  },
  (err) => {
    console.log("Err", err);
    return Promise.reject(err);
  }
);

axiosInstance2.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const status = err.response.status;

    if (status === 403) {
      // Coding
    } else if (status === 429) {
      // Coding
    } else if (status === 404) {
      // Coding
    } else if (status === 401) {
      // Navigate to login page
    }

    return Promise.reject(err);
  }
);

export default axiosInstance2;
