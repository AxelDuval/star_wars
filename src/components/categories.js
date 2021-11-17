import React, { useState, useEffect } from 'react';


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
        // console.log("return :")
        // console.log(items);
        const { borders = [] } =  items;

      return ( 

        // use borders directly
          <ul>
            {borders.map(border => {
             <li key={border}>{border}</li>;
            })}
            
          </ul>
          
        

      );
    }
  }

























    //     return (
//       <>
//         <main>
//           <h2>Accueil</h2>
//           <p>You can do this, I believe in you.</p>
//         </main>
//       </>
//     );
//   }

  export default Categories;