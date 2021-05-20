import "./App.css";
import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";

/* HOOKS
useState --> Para controlar el estado del componente
useEffect --> Para controlar cuando un componente se renderiza
*/


export default function App() {
  const [keyword, setKeyword] = useState('panda');
  return (
    <div className="App">
      <section className="App-content">
      <button onClick={() => setKeyword('mapache')}>Cambiar Keyword</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}
