import { atom } from "recoil";

const popup = {
    status: false,
    id: null,
    isReload: false 
}

export const popupState = atom({
    key: "popupState",
    default: popup
})

export const popupReload = atom({
    key: "popupReload",
    default: false
})
