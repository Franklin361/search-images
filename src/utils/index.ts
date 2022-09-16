import axios from 'axios';
import { ResponseAPI } from "../interface"

const ACCESS_KEY = import.meta.env.VITE_API_KEY as string

export const getImages = async (query: string): Promise<ResponseAPI> => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    const { data } = await axios.get(url)
    return data
}
