import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3333/"
});

export const apiFake = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});