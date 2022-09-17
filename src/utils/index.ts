import axios from 'axios';
import { ResponseAPI } from "../interface"
import { AxiosError } from 'axios';

const ACCESS_KEY = import.meta.env.VITE_API_KEY as string

export const getImages = async (query: string): Promise<ResponseAPI> => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        throw new Error((error as AxiosError).message)
    }
}
