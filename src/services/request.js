import { instance } from "../services/api";

export const getRequest = async () => await instance.get("/request/");
