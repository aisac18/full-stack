import axios from "axios";

const BASE_URL = 'http://localhost:3001/data';

const saveNumber = async (number) => {
    const request = axios.post(BASE_URL, number)
    return request.then(response => response.data)
}

const getNumbers = async () => {
    const request = axios.get(BASE_URL)
    return request.then(response => { console.log(response); return response.data })
}

export default { saveNumber, getNumbers }