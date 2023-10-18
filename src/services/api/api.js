import axios from "axios";

export const api = axios.create({
    baseURL: "http://18.208.9.255", // URL base para realizar as requisições
    headers: { "Content-Type": "application/json" }
})