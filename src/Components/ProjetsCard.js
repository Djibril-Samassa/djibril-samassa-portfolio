import React from "react";
import { useState } from "react";
import "../App.css";

export default function ProjetsCard(props){
    const[showDetails, setShowDetails] = useState(false);
    return(<>
        {showDetails ? <div className="card_container" id={props.id}><h3 className="projet_title test">{props.title}</h3>
        <p className="projet_details">{props.description}</p>
        <p className="projet_languages">{props.languages}</p>
        <a className="showOnGithub" href={props.link} target="_blank"><p>{props.action}</p></a>
    </div> : <div className="card_container single" id={props.idnodet} onClick={()=>{setShowDetails(true)}}>
        <h3 className="projet_title test">{props.title}</h3>
        <p className="details_explication">{props.details}</p>
        <p className="details_proposition">Cliquez pour plus de details</p>
    </div>}
    </>)
}