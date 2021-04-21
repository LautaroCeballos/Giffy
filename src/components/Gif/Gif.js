import React from 'react'
import { Link } from 'wouter'

// import './Gif.css'

function Gif({ title, id, url }) {
    const gifStyles = "break-inside relative rounded overflow-hidden bg-gray-100 shadow"
    const gifImgStyles = "w-full"
    const gifTitleStyles = "px-3 py-1 z-10 bg-black text-white text-xs"

    return (
        <Link
            to={`gif/${id}`}
            className={gifStyles}
        >
            <img
                alt={title}
                src={url}
                className={gifImgStyles}
            />
            <h4 className={gifTitleStyles}>{title}</h4>
        </Link>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})
