import React, { createContext, useContext } from "react";
import "../App.css"
import { Link, useHistory } from "react-router-dom";
import { showContext} from "../App";

export default function Presentation(){
    const showState = useContext(showContext)

    return showState.showPres ? (
    <div className="presentation_container">
        <div className='presentation'>
            <p className='thinText'>Bonjour, je suis</p>
            <h1 className='boldText'>djibril samassa</h1>
            <p className='regularText'>Développeur Frontend Junior</p>
        </div>
        <div className="presentation_choice">
            <a href="https://github.com/Djibril-Samassa?tab=repositories" target="_blank"><h3 className="option">Visitez mon Github</h3></a>
            <Link to="/apropos"><h3 className="option" onClick={() =>{showState.setShowPres(false)}}>Continuez sur mon Portfolio</h3></Link>
            <a href="https://www.linkedin.com/in/djibril-samassa" target="_blank"><h3 className="option">Visitez mon LinkedIn</h3></a>
        </div>
    </div>
        ) : null
}