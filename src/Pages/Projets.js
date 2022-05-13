import React from "react";
import "../App.css"
import ProjetsCard from "../Components/ProjetsCard";
import ProjetsList from "../ProjetsList.json"
import { showContext } from "../App";
import { useContext } from "react";

export default function Projets(){
    
    const showState = useContext(showContext)
    return(<>
        {showState.setShowPres(false)}
        <div className="text_container">
            <h1 className="thinText bloc_title">Mes Projets Réalisés</h1>
            <div className="projets_card_container">
                <ProjetsCard
                    id="tinywork"
                    idnodet="tinywork-no-det"
                    title={ProjetsList.tinywork.title}
                    description={ProjetsList.tinywork.description}
                    languages={ProjetsList.tinywork.languages}
                    link={ProjetsList.tinywork.repo_link}
                    details={ProjetsList.tinywork.details}
                    action="Cliquez pour voir le site"
                />
                <ProjetsCard
                    id="cuizine"
                    idnodet="cuizine-no-det"
                    title={ProjetsList.cuisine.title}
                    description={ProjetsList.cuisine.description}
                    languages={ProjetsList.cuisine.languages}
                    link={ProjetsList.cuisine.repo_link}
                    details={ProjetsList.cuisine.details}
                    action="Cliquez pour ouvrir sur Github"
                />
                <ProjetsCard
                    id="rover"
                    idnodet="rover-no-det"
                    title={ProjetsList.rover.title}
                    description={ProjetsList.rover.description}
                    languages={ProjetsList.rover.languages}
                    link={ProjetsList.rover.repo_link}
                    details={ProjetsList.rover.details}
                    action="Cliquez pour ouvrir sur Github"
                />
                <ProjetsCard
                    id="moovice"
                    idnodet="moovice-no-det"
                    title={ProjetsList.moovice.title}
                    description={ProjetsList.moovice.description}
                    languages={ProjetsList.moovice.languages}
                    link={ProjetsList.moovice.repo_link}
                    details={ProjetsList.moovice.details}
                    action="Cliquez pour ouvrir sur Github"
                />
                <ProjetsCard
                    id="weather_app"
                    idnodet="weather_app-no-det"
                    title={ProjetsList.weather_app.title}
                    description={ProjetsList.weather_app.description}
                    languages={ProjetsList.weather_app.languages}
                    link={ProjetsList.weather_app.repo_link}
                    details={ProjetsList.weather_app.details}
                    action="Cliquez pour ouvrir sur Github"
                />

            </div>
        </div>
    </>)
}