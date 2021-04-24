import React, { useCallback } from 'react'
//useLocation es un hook de wouter que nos permite navegar entre urls de forma programatica
import { useLocation } from 'wouter'
//useGifs es un hook personalizado que se encarga de hacer la llamada a la api
// y devuelve solo la lista de gifs y un booleano si esta cargando o no
import { useGifs } from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
// import './style.css'
import LazyTrending from 'components/TrendingSearches/index'
import SearchForm from 'components/SearchForm/index'
import Spinner from 'components/Spinner/Spinner'
import { Helmet } from 'react-helmet'

export default function Home() {
    const lastSearchStyles = "mb-5 font-semibold text-5"
    const gifsContainerStyles = "min-h-screen"

    const [path, pushLocation] = useLocation()
    const { gifs, isLoading } = useGifs()

    const lastSearch = localStorage.getItem('lastKeyword')


    //useCallback memoriza una funcion y solo la actualiza cuando su dependencia ha cambiado
    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])


    //React.Fragment y <></> son lo mismo
    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
                <meta
                    name="description"
                    content="Listado de la ultima busqueda"
                />
            </Helmet>

            <SearchForm onSubmit={handleSubmit} />
            <h2 className={lastSearchStyles}>{`Ultima busqueda: ${decodeURI(lastSearch)}`}</h2>
            <section className={gifsContainerStyles}>
                {
                    isLoading
                        ? <Spinner />
                        : <ListOfGifs gifs={gifs} />
                }
            </section>

            <LazyTrending />
        </>
    )
}
