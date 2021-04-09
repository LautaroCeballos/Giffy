import React from 'react'

export default function Detail ({ params }) {
    console.log(params.id)
    return <h2>{params.id}</h2>
}