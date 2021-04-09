//Es una buena practica tener custom hooks para la escritura
//otros para la lectura del contexto

import { useContext } from 'react'
import GifsContext from '../context/GifsContext'

export default function useGlobalGifs () {
    const { gifs } = useContext(GifsContext)
    return gifs
}