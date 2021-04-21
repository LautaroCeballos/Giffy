import React from 'react';
import Gif from '../Gif/Gif';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// import './style.css'

export default function ListOfGifs({ gifs }) {

  return <ResponsiveMasonry
    columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3 }}
  >
    <Masonry gutter="10px">
      {
        //Es Muy importante a declarar la prop key siempre que se defina un Array.map()
        gifs.map(gif =>
          <Gif
            key={gif.id}
            title={gif.title}
            url={gif.url}
            id={gif.id}
            className="ListOfGifs-item"
          />
        )
      }
    </Masonry>
  </ResponsiveMasonry>
}