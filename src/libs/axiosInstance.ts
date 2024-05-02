import { REACT_APP_SERVER_URL } from "@env";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pumpyfix-server.onrender.com",
});

export default axiosInstance;
