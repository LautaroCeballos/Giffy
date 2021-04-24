import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import Spinner from 'components/Spinner/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'


export default function SearchResults({ params }) {
    const gifsContainerStyles = "min-h-screen"

    const { keyword } = params
    const { gifs, isLoading, setPage } = useGifs({ keyword }) //Hooks: Aislar la logica
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        distance: '0px',
        externalRef: isLoading ? null : externalRef,
        once: false
    });

    // const handleNextPage = () => setPage(prevPage => prevPage + 1)
    // const handleNextPage = () => console.log('next page')

    // console.log(isNearScreen)

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 300
    ), [])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <React.Fragment>
        <Helmet>
            <title>{`${gifs.length} resultados para: ${decodeURI(keyword)} | Giffy`}</title>
            <meta
                    name="description"
                    content="Resultado de busquedas"
                />
        </Helmet>

        <section className={gifsContainerStyles}>
            {
                isLoading
                    ? <Spinner />
                    : <ListOfGifs gifs={gifs} />
            }
        </section>

        <div id="visor" ref={externalRef}></div>
    </React.Fragment>
}