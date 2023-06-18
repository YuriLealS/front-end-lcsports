import { api } from "../api/api";

export const costureiraPeloId = async (idCostureira) => {
    try {
        const response = await api.get(`v1/usuarios/${idCostureira}`);
        return response;
    } catch (error) {
        return error;
    }
};
