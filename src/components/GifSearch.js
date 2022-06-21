import React, { useState } from 'react';

function GifSearch({ submitHandler }) {
  const [textSearch, setTextSearch] = useState('');

  function handleChange(e) {
    setTextSearch(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault();
    submitHandler(textSearch);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={textSearch} onChange={e => handleChange(e)}></input>
      <input type="submit"></input>
    </form>
  )
}

export default GifSearch;