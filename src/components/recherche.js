import React, { useState, useEffect } from 'react';
import './recherche.css'


function Recherche() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('1');

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${input}/`).then(res => res.json()).then((result) => {
      setIsLoaded(true);
      setItems(result);
      // console.log(result);
    },
      // Remarque : il faut gérer les erreurs ici plutôt que dans
      // un bloc catch() afin que nous n’avalions pas les exceptions
      // dues à de véritables bugs dans les composants.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [input])


  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    console.log(items);
    console.log(input);
    return (

      <div className="row justify-content-center m-3 p-2">

        <form className="mb-3">
          <input
          className="form-control" 
          type="search" 
          placeholder="Rechercher un personnage" 
          aria-label="Search" 
          value={input}
          onInput={e => setInput(e.target.value)}
          />
        </form>


        {
          Object.keys(items).map((item, i) => (
            <ul className="m-2" key={i}>
              <li><b>{item}</b> : {items[item]}</li>
            </ul>
          ))
        }
      </div>

    )
  }
}

export default Recherche;
