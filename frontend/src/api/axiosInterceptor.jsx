import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api1/v1/ecommerce'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


// Methods 
async function getData(url){
    try {
        const result = await instance.get(url);
        return result
    } catch (error) {
        console.log('error', error)
        return false
    }
}

async function postData(url, data){
    try {
        const result = await instance.post(url, data);
        return result
    } catch (error) {
        console.log('error', error)
        return false
    }
}

export { getData, postData }
