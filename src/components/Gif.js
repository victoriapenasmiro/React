import React from "react";
import "./Gif.css";

//recibe props
export default function Gif({ title, url, id }) {
  return (
    <a href={`${id}`} className='Gif'>
      <h4>{title}</h4>
      {/*<small>{id}</small>*/}
      <img src={url} />
      {/* <button onClick={() => setGifs(DIFF_GIFS)}>Cambiar GIFS</button> */}
    </a>
  );
}
