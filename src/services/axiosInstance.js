import axios from "axios";

export const a = axios.create({
    baseURL: 'https://testvueproject.pythonanywhere.com/api/v1/'
})