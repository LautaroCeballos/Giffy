import React from 'react'
import {Link} from 'wouter'

export default function Category({ name, options }) {
    const titleStyles = "mt-5 mb-3 text-3xl"
    const itemStyles = "inline-block m-1 px-2 py-1 text-white hover:scale-50"
    
    const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'pink']
    const randomColor = colors => {
        const random = Math.floor(Math.random() * colors.length)
        const selectedColor = colors[random]
        const color = 'bg-' + selectedColor + '-600'
        return color   
    }

    return <>
        <h2 className={titleStyles}>{name}</h2>
        <ul>{
            options.map((option) => {
                return <li key={option} className={`${itemStyles} ${randomColor(colors)}`}>
                    <Link className="Link" to={`/search/${option}`}>Gifs de {option}</Link>
                </li>
            })
        }</ul>
    </>
}