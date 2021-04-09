import React from 'react';
import Gif from '../Gif/Gif';

import './style.css'

export default function ListOfGifs({ gifs }) {
  return <div className="ListOfGifs">
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
  </div>
}