import React from 'react';

function GifList({ gifData, search }) {
  const srcText = `Image of ${search}`
  

  const displayGifs = gifData.map(gif => (
    <li key={gif.id}><img src={gif.images.original.url} alt={srcText}/></li>
  ))

  return (
    <ul>
      {displayGifs}
    </ul>
  )
}

export default GifList;