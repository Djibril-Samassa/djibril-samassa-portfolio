import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function Header(){
    return(<>
    <div className="accueil_container">
      <nav className="presentation_choice">
          <Link to="/apropos" className="option acceuil_option">A propos de moi</Link>
          <Link to="/competences" className="option acceuil_option">Mes compétences</Link>
          <Link to="/projets" className="option acceuil_option">Mes projets</Link>
          <Link to="/parcours" className="option acceuil_option">Mon parcours</Link>
          <Link to="/coordonnees" className="option acceuil_option">Mes coordonnées</Link>
      </nav>
    </div>
      </>)
}