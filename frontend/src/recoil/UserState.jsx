import {atom} from 'recoil'

const defaultData = JSON.parse(localStorage.getItem("user")) || {}

export const userState = atom({
    key: "userState",
    default: {
        status: defaultData ? true : false,
        data: defaultData
    }
})