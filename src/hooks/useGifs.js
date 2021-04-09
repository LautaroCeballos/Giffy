import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

/*
    Los hooks son la forma correcta de aislar la logica para mejorar
    el entendimiento de nuestros componentes. Principalmente cuando 
    necesitamos utilizar un fragmento de codigo en varias partes distintas
    de nuestra aplicacion. Este hook fue creado inicialmente para utilizarce
    en el page searchResult y en el home
*/

export function useGifs({ keyword } = { keyword: null }) {
    // const [gifs, setGifs] = useState([])
    const {gifs, setGifs} = useContext(GifsContext) //Estado global
    const [isLoading, setIsLoading] = useState(false)
    //useEffect se va a ejecutar cada vez que se renderice el componente
    //Lo usamos para hacer el llamdo a la api antes de renderizar
    useEffect(() => {
        setIsLoading(true)
        //Recuperamos la keyword en el localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setIsLoading(false)
                //Guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword, setGifs])

    /*
        El segundo parametro de useEffect es un array que por defecto puede estar vacio
        lo que significaria que esta funcion solo se va a ejecutar la primera vez que se
        renderice el componente. Si nosotros le pasaramos una dependencia, en este caso 
        'keyword', la funcion se ejecutara cada vez que detecte un cambio en esa misma
        dependencia. Lo que nos permite mantener actualizado correctamente el estado de
        nuestro componente
    */

    

    return { gifs, isLoading }
}