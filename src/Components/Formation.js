import React from "react";
import '../App.css'

export default function Formation(props){
    return(<div className="formation_container">
        <div className="formation_title">
            <h1 className="formation_name">{props.name}</h1>
            <p className="year">{props.year}</p>
            <p className="tasks">{props.tasks}</p>
        </div>
        
    </div>)
}