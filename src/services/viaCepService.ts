import axios from 'axios';

const defaultApi = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});

defaultApi.interceptors.request.use(async request => {
    return request;
});

defaultApi.interceptors.response.use(
    response => response,
    error => {
        Promise.reject(error);
    }
);

const getCep = async(cep: string | number) => {
    return await (await defaultApi.get<Cep>(`${cep}/json/`)).data;
}

export default getCep;
