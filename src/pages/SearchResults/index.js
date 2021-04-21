import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import Spinner from 'components/Spinner/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'


export default function SearchResults({ params }) {
    const { keyword } = params
    const { gifs, isLoading, setPage } = useGifs({ keyword }) //Hooks: Aislar la logica
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
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

    return <React.Fragment>{
        isLoading
            ? <Spinner />
            : <>
                <ListOfGifs gifs={gifs} />
            </>
    }
        <div id="visor" ref={externalRef}></div>
    </React.Fragment>
}