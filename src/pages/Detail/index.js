import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { Redirect } from 'wouter'
import Gif from '../../components/Gif/Gif'
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif.title

    if (isLoading) return <>
        <Helmet>
            <title>Cargando...</title>
        </Helmet>
        <meta
            name="description"
            content="Loading"
        />
        <Spinner />
    </>
    if (isError) return <Redirect to='/404' />

    return <>
        <Helmet>
            <title>{title} | Giffy</title>
            <meta
                name="description"
                content={`"Detalle para ${title}"`}
            />
        </Helmet>
        <Gif {...gif} />
    </>
}