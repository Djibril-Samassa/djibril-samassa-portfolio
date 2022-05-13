import React from "react";
import { Icon } from "@iconify/react";
import "../App.css";
import { showContext} from "../App";
import { useContext } from "react";

export default function Coordonnees(){
    const showState = useContext(showContext)
    return(<>
        {showState.setShowPres(false)}
        <div>
            <h1 className="thinText bloc_title">Me Contacter</h1>
            <p className="boldText">N'hesitez pas a me contacter si mon profil vous interesse ou si vous avez des suggestions</p>
            <div className="data_container">
                <div className="contactContainer">
                    <Icon icon="akar-icons:phone" className="dataIcon" width="30" height="30" />
                    <a href="tel:+33637035641" className="contactLink"><p className="takeContact">06 37 03 56 41</p></a>
                </div>
                <div className="contactContainer">
                    <Icon icon="ci:mail" color="white" className="dataIcon" width="30" height="30" />
                    <a href="mailto:djibrilsamassa.pro@gmail.com" target="_blank" className="contactLink"><p className="takeContact">djibrilsamassa.pro@gmail.com</p></a>
                </div>
                <div className="contactContainer">
                    <Icon icon="akar-icons:linkedin-box-fill" className="dataIcon" color="white" width="30" height="30" />
                    <a href="https://www.linkedin.com/in/djibril-samassa" target="_blank" className="contactLink"><p className="takeContact">Mon Linkedin</p></a>
                </div>
                <div className="contactContainer">
                    <Icon icon="akar-icons:github-fill" className="dataIcon" color="white" width="30" height="30" />
                    <a href="https://github.com/Djibril-Samassa?tab=repositories" target="_blank" className="contactLink"><p className="takeContact">Mon Github</p></a>
                </div>
                
            </div>
        </div>
        </>)
}