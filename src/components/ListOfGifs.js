import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

// const GIFS = [
//   'https://media.giphy.com/media/UT5ZcD8iB55Qp1jMlF/giphy.gif',
//   'https://media.giphy.com/media/l0QJRsUoST9FoTOceu/giphy.gif'
// ]

// const DIFF_GIFS = [
//   'https://media.giphy.com/media/l0Hlyjm3kCsUYmP8Q/giphy.gif',
//   'https://media.giphy.com/media/W4fOzjmhTR4zLXCPrw/giphy.gif'
// ]

export default function ListOfGifs({ keyword }) {
  //const [gifs,setGifs] = useState([]); Es lo mismo que el desglose siguiente
  //const state = useState(GIFS);
  const state = useState([]);
  const gifs = state[0];
  const setGifs = state[1];

  //useEffect (() => console.log('componente renderizado'));

  // --> Forma para renderizar el componente una sola vez, la primera
  // useEffect(() => {
  //   console.log('componente renderizado 1 sola vez, la primera');
  //   setGifs(DIFF_GIFS);
  // }, []);

  useEffect(() => {
    console.log("componente renderizado 1 sola vez, la primera");
    getGifs({ keyword })
        .then((gifs) => setGifs(gifs));
  }, [keyword]); //--> indicamos que este efecto tiene la dependencia de keyword, de forma que cada vez que keyword cambie, se renderice

  return gifs.map(
    (singleGif) => (
      <Gif
        key={singleGif.id}
        /*En React, cuando hacemos un listado de elementos es necesario identificar de forma única
      a todos los elementos para evitar renderizar todos los elementos
      sino únicamente el seleccionado --> sale warning en la consola*/
        title={singleGif.title}
        url={singleGif.url}
        id={singleGif.id}
      />
    )

    //{... singleGif} --> esto coge automáticamente todas las props, sin necesidad de tener que detallarlas
  );
}
