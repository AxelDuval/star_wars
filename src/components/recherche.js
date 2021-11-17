import { Link } from "react-router-dom";


function Recherche() {
    return (
      <>
        <main>
          <h2>Recherche</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
          
          <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Rechercher</button>
                        </form>
        </main>
      </>
    );
  }

  export default Recherche;