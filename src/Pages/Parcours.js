import React from "react";
import Formation from "../Components/Formation";
import FormationsList from"../Formations.json"
import '../App.css'
import { showContext} from "../App";
import { useContext } from "react";

export default function Parcours(){
    const showState = useContext(showContext)
    return(<>
        {showState.setShowPres(false)}
        <div className="parcours_container">
            <div className="formations">
                <h1 className="thinText bloc_title">Formation</h1>
                <Formation
                    name={FormationsList.konexio.title}
                    year={FormationsList.konexio.year}
                    tasks={[FormationsList.konexio.task1,<br/>,FormationsList.konexio.task2,<br/>,
                            FormationsList.konexio.task3,<br/>,FormationsList.konexio.task4,<br/>,
                            FormationsList.konexio.task5,FormationsList.konexio.task6,<br/>,
                            FormationsList.konexio.task7,<br/>,FormationsList.konexio.task8]}
                />

                <Formation
                    name={FormationsList.galilée.title}
                    year={FormationsList.galilée.year}
                    tasks={FormationsList.galilée.task}
                />
            </div>

            <div className="experiences">
                <h1 className="thinText bloc_title">Mon Expérience</h1>
                <Formation
                    name={FormationsList.animation.title}
                    year={FormationsList.animation.year}
                    tasks={[FormationsList.animation.task1,<br/>,FormationsList.animation.task2,<br/>,
                            FormationsList.animation.task3]}
                />
                <Formation
                    name={FormationsList.novaip.title}
                    year={FormationsList.novaip.year}
                    tasks={FormationsList.novaip.task}
                />
                <Formation
                    name={FormationsList.eurotech.title}
                    year={FormationsList.eurotech.year}
                    tasks={[FormationsList.eurotech.task1,<br/>,FormationsList.eurotech.task2,<br/>,
                            FormationsList.eurotech.task3]}
                />
                <Formation
                    name={FormationsList.hightech.title}
                    year={FormationsList.hightech.year}
                    tasks={[FormationsList.hightech.task1,<br/>,FormationsList.hightech.task2]}
                />
            </div>
        </div>
    </>)
}