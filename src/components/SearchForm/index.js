import React, { useState } from 'react'

function SearchForm({ onSubmit }) {
    const inputStyles = "px-3 h-8 rounded rounded-r-none border"
    const buttonStyles = "px-5 h-8 rounded rounded-l-none bg-gray-300 hover:bg-gray-500 hover:text-white transition"
    const formStyles = "w-full text-center my-5"
    
    const [keyword, setKeyword] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        if (keyword !== '')
            onSubmit({keyword})
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }


    return (
        <form className={formStyles} onSubmit={handleSubmit}>
            <input
                className={inputStyles}
                onChange={handleChange}
                type="text"
                value={keyword}
                placeholder='Busca tu gif aqui'
            />
            {/* Los formularios automaticamente detectan el ultimo button y le dan el evento submit */}
            <button className={buttonStyles}>Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)
/* 
    React.memo es un componente de orden superior (Recibe un componente y devuelve un componente)
    Memoriza el componente y solo lo renderiza cuando sus props han cambiado
*/