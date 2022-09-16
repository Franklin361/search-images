import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Card } from './Card';

import { getImages } from "../utils"
import { ResponseAPI } from '../interface';
import { Loading } from './Loading';



interface IGridResults {
    isLoading: (e: boolean) => void
    query: string
}

export const GridResults = ({ query, isLoading: setLoading }: IGridResults) => {

    const { data, isLoading, error, isError } = useQuery<ResponseAPI>(['images', query], () => getImages(query))

    useEffect(() => setLoading(isLoading), [isLoading])

    if (isLoading) return <Loading />

    if (isError) return <p>{(error as AxiosError).message}</p>


    return (
        <>
            <p className='no-results'>
                {data && data.results.length === 0 ? 'No results with: ' : 'Results with: '}
                <b>{query}</b>
            </p>

            <div className='grid'>
                {data.results.map(res => (<Card key={res.id} res={res} />))}
            </div>
        </>
    )
}