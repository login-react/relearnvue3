import axios from "axios";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: "/api", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 300000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const result = getToken("USER_INFO");
    if (result) {
      config.headers["Authorization"] = result.token;
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
    if (response.status === 200) {
      return Promise.resolve(response?.data);
    }
    return Promise.reject(response?.data);
  },
  (error) => {
    console.log("error :>> ", error);
  }
);

export default service;
