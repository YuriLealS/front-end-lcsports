import { api } from "../api/api";

export const costureiraPeloId = async (id) => {
  try {
    const response = await api.get(`v1/usuarios/${id}`);
    console.log(response.data); // Exibe a resposta no console
    return response;
  } catch (error) {
    console.error(error); // Exibe o erro no console
    return error;
  }
};
