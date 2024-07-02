import { instance } from "../services/api"

export const insertUser = async (obj) => await instance.post('/user/', obj);

export const loginUser = async (username, password) => await instance.post("/login", {},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + btoa(username + ":" + password),
        },
    }
)
