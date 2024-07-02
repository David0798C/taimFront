import { instance } from "./api";

export const getTask = async () => await instance.get("/tasks/");

export const createTask = async (obj) => {
  console.log("1111111111");
  await instance.post("/tasks/", obj);
  console.log("2222222222");
};

export const updateTask = async (id, obj) =>
  await instance.put(`/tasks/` + id, obj);

export const deleteTask = async (id) => await instance.delete(`/tasks/` + id);
