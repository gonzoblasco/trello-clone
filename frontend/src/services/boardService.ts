import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getBoards = async () => {
  const response = await axios.get(`${API_URL}/boards`);
  return response.data;
};

export const createBoard = async (title: string) => {
  const response = await axios.post(`${API_URL}/boards`, {
    id: Date.now(),
    title,
  });
  return response.data;
};

export const deleteBoard = async (id: number) => {
  await axios.delete(`${API_URL}/boards/${id}`);
};
