import axios from 'axios'
import { getToken } from '../helpers/tokenHelper'
let token;
getToken().then(res => { token = res });

const axiosClient = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }, timeout: 30000,
});

axiosClient.interceptors.request.use(async req => {
    if (!token) {
        token = await getToken();
        req.headers.Authorization = `Bearer ${token}`;
    }
    token = await getToken();

    req.headers.Authorization = `Bearer ${token}`;
    return req;
});

axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient;