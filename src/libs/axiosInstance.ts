// import {REACT_APP_SERVER_URL} from '@env';
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://api.render.com/deploy/srv-cold1pu3e1ms738bkpq0?key=QnhAIL7dAnA",
});

export default axiosInstance;
