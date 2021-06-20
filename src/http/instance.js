// 引入axios
import axios from 'axios'
// 创建新的实例
const instance =axios.create({
    baseURL:"https://api-haoke-web.itheima.net/",
    timeout:10000
})

// 请求+响应 拦截器
instance.interceptors.request.use(function (config) {
    return config
},function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response.data
},function (error) {
    return Promise.reject(error)
})

// 导出
export default instance