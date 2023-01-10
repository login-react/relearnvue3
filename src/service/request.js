import axios from "axios";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 300000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response?.data.code === 200) {
      return Promise.resolve(response?.data)
    }
    return Promise.reject(response?.data)

  },
  (error) => {
    console.log('error :>> ', error);
  }
);

export default service;
