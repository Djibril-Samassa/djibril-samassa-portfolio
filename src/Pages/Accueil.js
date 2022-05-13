import React from "react";
import Presentation from "../Components/Presentation";
import Header from "../Components/Header";
import { Icon } from "@iconify/react";
import { showContext } from "../App";
import { useContext } from "react";

export default function Accueil(){
    const showState = useContext(showContext)
    return (<>
        {showState.setShowPres(false)}
        <Header/>
        </>)
}