import React, { createContext, useContext } from "react";
import "../App.css"
import { Link, useHistory } from "react-router-dom";
import { showContext} from "../App";

export default function Presentation(){
    const showState = useContext(showContext)

    return showState.showPres ? (
    <div className="presentation_container">
        <div className='presentation'>
            <p className='thinText presentation_option'>Bonjour, je suis</p>
            <h1 className='boldText presentation_option'>djibril samassa</h1>
            <p className='regularText presentation_option'>Développeur Frontend Junior</p>
        </div>
        <div className="presentation_choice">
            <a href="https://github.com/Djibril-Samassa?tab=repositories" target="_blank" className="option"><h3>Visitez mon Github</h3></a>
            <Link to="/apropos" className="option" onClick={() =>{showState.setShowPres(false)}}><h3>Continuez sur mon Portfolio</h3></Link>
            <a href="https://www.linkedin.com/in/djibril-samassa" target="_blank" className="option"><h3>Visitez mon LinkedIn</h3></a>
        </div>
    </div>
        ) : null
}