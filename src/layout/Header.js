import { Link } from "react-router-dom";


function Header() {
    return(
       
    <div>
       <header className="bg-dark py-5">
            <section className ="container text-center text-white">
                <h1 className="text-warning">Star wars</h1>
                <p className="lead">API Swapi</p>
            </section>
        </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                          <Link to='/' className="nav-link">Accueil</Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/recherche" className="nav-link">Recherche</Link>
                          </li>
                        </ul>
                       
                      </div>
                    </div>
                  </nav>
    </div>
        
                    
    ) 
}

export default Header;