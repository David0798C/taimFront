import { instance } from "../services/api";

export const deleteUser = async (id) => await instance.delete("/user/" + id);

export const updateUser = async (id, obj) =>
  await instance.put("/user/" + id, obj);

export const getUser = async () => await instance.get("/user/");

export const getUserById = async (id) => await instance.get("/user/" + id);
