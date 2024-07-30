import { instance } from "../services/api";

export const getRequest = async () => await instance.get("/requests/");

export const postRequest = async (obj) =>
  await instance.post("/requests/", obj);

export const deleteRequest = async (id) =>
  await instance.delete("/requests/" + id);

export const updateRequestStatus = async (id, obj) => {
  await instance.put("/requests/" + id, obj);
};
