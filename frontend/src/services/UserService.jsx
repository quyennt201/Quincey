import axiosConfig from "./axiosConfig";

const userService = {
    register: (user) => {
        return axiosConfig.post(`/register`, user)
    },
    login: (user) => {
        return axiosConfig.post(`/login`, user)
    }
}

export default userService