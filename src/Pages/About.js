import React from "react";
import Presentation from "../Components/Presentation";
import Header from "../Components/Header";
import { Icon } from "@iconify/react";
import { showContext } from "../App";
import { useContext } from "react";

export default function About(){
    const showState = useContext(showContext)
    return (<>
        {showState.setShowPres(false)}
        <div className="text_container">
            <h1 className="thinText bloc_title">A propos de moi</h1>
            <p className="boldText">Jeune titulaire d'un Baccalaureat Professionnel en systemes numeriques
            J'ai toujours ete interesse par la programmation et la logique qu'il y a derriere, et je me suis 
            interesse au developpement Web plus en detail lors d'une initiation en 2018. <br/><br/> Apres l'obtention de mon bac
            en 2020 j'ai poursuivi dans ce domaine, j'ai eu beaucoup d'experience dans ma vie, notamment dans l'animation, ce qui
            m'a permis de developper des softs skills qui me sont benefiques dans toutes mes taches quotidiennes<br/>
            je suis actuellement apprenant chez <a href="https://www.konexio.eu/index.html" className="konexio" target="_blank">Konexio</a>,
            Un organisme labelise Paris code, formant au metier de developpeur web et web mobile avec un titre RNCP de niveau 5 au bout
            de la formation</p>
        </div>
        <div className="text_container">
            <h1 className="thinText bloc_title">Mes hobbies</h1>
            <p className="boldText hobbies">Football, Jeux videos et Cuisine</p>
        </div>
        </>)
}