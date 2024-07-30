import { instance } from "../services/api"

export const sendEmail = async (obj) => {
    await instance.post("/email/send", obj);
};