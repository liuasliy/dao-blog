import axios from 'axios'

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = false

// 请求拦截器
axios.interceptors.request.use(function(config) {
        return config;
    }, function(error) {
        return Promise.reject(error);
    })
    // 响应拦截器
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
})

// 封装axios的post请求
let fetch = (info) => {
    return new Promise((resolve, reject) => {
        if (info.type == 'post') {
            axios.post(
                    info.url,
                    info.params
                )
                .then(response => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })

        } else if (info.type == 'patch') {
            axios.patch(
                    info.url,
                    info.params
                )
                .then(response => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        } else if (info.type == 'get') {
            axios.get(
                    info.url,
                    info.params
                )
                .then(response => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        }

    })
}

export default fetch