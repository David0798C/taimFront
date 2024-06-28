import { instance } from "./api";

export const getTask = async () => await instance.get("/tasks/");

export const createTask = async (obj) => await instance.create("/tasks/", obj);

export const updateTask = async (id, obj) =>
  await instance.put(`/tasks/` + id, obj);

export const deleteTask = async (id) => await instance.delete(`/tasks/` + id);
