import React from "react";
import { Icon } from "@iconify/react";
import "../App.css"
import { showContext } from "../App";
import { useContext } from "react";

export default function Competences(){
    const showState = useContext(showContext)
    return(<>
    {showState.setShowPres(false)}
    <div className="competences_container competences_bloc">
        <div className="text_container">
            <h1 className="thinText bloc_title">Mes compétences</h1>
            <div className="icons_container">
                <Icon className="icon" icon="logos:javascript" width="50" height="40"/>
                <Icon className="icon" icon="logos:react"  width="50" height="40"/>
                <Icon className="icon"icon="logos:html-5"  width="50" height="40"/>
                <Icon className="icon" icon="logos:css-3"  width="50" height="40"/>
            </div>
            <div className="icons_container">
                <Icon className="icon" icon="vscode-icons:file-type-json"  width="50" height="40"/>
                <Icon className="icon" icon="logos:mongodb" width="200" height="40"/>
                <Icon className="icon" icon="logos:postgresql" width="50" height="40"/>
                <Icon className="icon" icon="carbon:hearing" width="50" height="40"/>
            </div>
            <div className="icons_container">
                <Icon className="icon" icon="vscode-icons:file-type-node2" width="50" height="40" />
                <Icon className="icon" icon="logos:bootstrap" width="50" height="40" />
                <Icon className="icon"icon="bi:search" width="50" height="40" />
                <Icon className="icon" icon="akar-icons:github-fill" width="50" height="40" />
            </div>
        </div>
        <div className="text_container second_bloc competences_bloc">
            <h1 className="thinText bloc_title">Soft Skills</h1>
            <div className="skills_container">
                <p className="skills">Combativite, Patience, Curiosite,<br/>
                 Sens de l'equipe et des responsabilite,<br/>Engagement</p>
            </div>
        </div>
        <div className="text_container">
            <h1 className="thinText bloc_title">Outils de travail</h1>
            <div className="icons_container">
                <Icon className="icon" icon="logos:google-drive" width="50" height="40" />
                <Icon className="icon" icon="cib:canva" width="50" height="40" />
                <Icon className="icon" icon="simple-icons:miro" width="50" height="40" />
                <Icon className="icon" icon="logos:trello" width="50" height="40" />
            </div>
            <div className="icons_container">
                <Icon className="icon" icon="ant-design:google-circle-filled" width="50" height="40" />
                <Icon className="icon" icon="vscode-icons:file-type-vscode3" width="50" height="40" />
                <Icon className="icon" icon="logos:postman" width="90" height="40" />
            </div>
        </div>
    </div>
    <div className="motivation">
        <p className="skills2">Je souhaites mettre mes connaissances en pratique, evoluer et apprendre le developpement web<br/></p>
    </div>
    </>)
}