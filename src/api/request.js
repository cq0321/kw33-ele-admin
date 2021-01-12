import axios from "axios";

const request = axios.create({
    baseURL: "http://127.0.0.1:3000", // 基础请求地址
    timeout: 3000 // 超时时间
    // headers: headers // 请求头
})

// 请求拦截器
// request.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log("在发送请求之前做些什么好呢？");
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

// 响应拦截器

// 导出
export default request