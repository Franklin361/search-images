import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

import { Card } from './Card';

import { ResponseAPI } from '../interface';
import { getImages } from "../utils";
import { Loading } from './Loading';



interface IGridResults {
    handleLoading: (e: boolean) => void
    query: string
}

export const GridResults = ({ query, handleLoading }: IGridResults) => {

    const { data, isLoading, error, isError } = useQuery<ResponseAPI>([query], () => getImages(query))

    useEffect(() => handleLoading(isLoading), [isLoading])

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