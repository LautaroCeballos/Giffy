import React, { useState } from 'react'
//useLocation es un hook de wouter que nos permite navegar entre urls de forma programatica
import { Link, useLocation } from 'wouter'
//useGifs es un hook personalizado que se encarga de hacer la llamada a la api
// y devuelve solo la lista de gifs y un booleano si esta cargando o no
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import './style.css'

const POPULAR_GIFS = ['Matrix', 'Tom and Jerry', 'Ed Edd and Eddy']

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { gifs, isLoading } = useGifs()

    const lastSearch = localStorage.getItem('lastKeyword')

    const handleSubmit = e => {
        e.preventDefault()
        if (keyword !== '')
            pushLocation(`/search/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    //React.Fragment y <></> son lo mismo
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={keyword}
                    placeholder='Busca tu gif aqui'
                />
                {/* Los formularios automaticamente detectan el ultimo button y le dan el evento submit */}
                <button>Buscar</button>
            </form>

            <h2>{`Ultima busqueda: ${lastSearch}`}</h2>

            {
                isLoading
                    ? <i>Cargando...</i>
                    : <ListOfGifs gifs={gifs} />
            }


            <h2>Gifs Populares</h2>
            <ul>{
                POPULAR_GIFS.map((popularGif) => {
                    return <li key={popularGif}>
                        <Link className="Link" to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                })
            }</ul>
        </>
    )
}
