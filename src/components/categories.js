import React, { useState, useEffect } from 'react';
import './categories.css'


function Categories() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch("https://swapi.dev/api/").then(res => res.json()).then((result) => {
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
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    
    return (

      <div className="row justify-content-center mt-3">
        {
        Object.keys(items).map((item, i) => (
          <div className="card col-3 m-2 p-0" key={i}>
          <img className="card-img-top" src="https://c2.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/02/star-wars.jpg?resize=600,300" alt="images"></img>
            <div className="card-body text-center p-5">{item}</div>
          </div>
        ))
        }
      </div>

    )
  }
}

export default Categories;