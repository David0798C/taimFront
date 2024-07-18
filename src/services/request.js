import { instance } from "../services/api";

export const getRequest = async () => await instance.get("/request/");

export const postRequest = async (obj) => await instance.post("/request/", obj);