import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { gifs, isLoading } = useGifs({keyword}) //Hooks: Aislar la logica
    

    return <React.Fragment>{
        isLoading
            ? <i>Cargando...</i>
            : <ListOfGifs gifs={gifs} />
    }</React.Fragment>

    /*
    gifs.map(({id, title, url}) => 
      <Gif
        key={id}
        id={id}
        title={title}
        url={url}
      />
    )
    */
}