import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: "http://139.196.204.151:8081",
        timeout: 10000
    });
    // 请求拦截器
    axios.interceptors.request.use(config => {
        console.log(config);
    });
    return instance(config);
}
