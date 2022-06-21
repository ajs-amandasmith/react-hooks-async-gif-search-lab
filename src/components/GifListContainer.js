import React, { useState, useEffect } from 'react';
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifData, setGifData] = useState([]);
  const [search, setSearch] = useState('dolphin');

  const myKey = "XBQZQ1Jkg97Bw8pUH0y7CnTndVzSCpDs";

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${myKey}&rating=g&limit=3`)
      .then(r => r.json())
      .then(gifs => {
        // console.log(gifs.data)
        setGifData(gifs.data)
      })
  }, [search])

  function submitHandler(searchTerm) {
    setSearch(searchTerm)
  }

  return (
    <div>
      <GifSearch submitHandler={submitHandler} />
      <br></br>
      <GifList gifData={gifData} search={search} />
    </div>
  )
}

export default GifListContainer;