import { BOOK, DELETE } from "./actionTypes"


export const book = (info) => {
    return {
        type: BOOK,
        payload: info,
    }
};

export const deleteBooking = (info) => {
    return {
        type: DELETE,
        payload: info,
    }
}