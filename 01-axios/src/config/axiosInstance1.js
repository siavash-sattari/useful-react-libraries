import axios from "axios";

const axiosInstance1 = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance1;
