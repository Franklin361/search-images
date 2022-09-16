import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Card } from './Card';

import { getImages } from "../utils"
import { ResponseAPI } from '../interface';



interface IGridResults {
    isLoading: (e: boolean) => void
    query: string
}

export const GridResults = ({ query, isLoading: setLoading }: IGridResults) => {

    const { data, isLoading, error, isError } = useQuery<ResponseAPI>(['images', query], () => getImages(query))

    useEffect(() => setLoading(isLoading), [isLoading])

    if (isLoading) return <p>Loading results</p>

    if (isError) return <p>{(error as AxiosError).message}</p>

    if (data && data.results.length === 0) return <p>No results with: {query}</p>

    return (
        <div> {data.results.map(res => (<Card key={res.id} res={res} />))} </div>
    )
}