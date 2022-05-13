import './App.css';
import Header from './Components/Header';
import Accueil from './Pages/Accueil';
import Parcours from './Pages/Parcours';
import Presentation from './Components/Presentation';
import Competences from './Pages/Competences';
import About from './Pages/About';
import Projets from './Pages/Projets';
import Coordonnees from './Pages/Coordonnees';
import Footer from './Components/Footer.js';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';

export const showContext = createContext()

function App() {
  const [showPres, setShowPres] = useState(true)

  const value = {
    showPres: showPres,
    setShowPres : setShowPres
  }

  return(
    <div className='app_container'>
    <showContext.Provider value={value}>
      <BrowserRouter>
        {showPres ? <Presentation/> : <Accueil/>}
        <Routes>

          <Route path="/apropos" element={<About/>}/>
          <Route path="/competences" element={<Competences/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/parcours" element={<Parcours/>}/>
          <Route path="/coordonnees" element={<Coordonnees/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </showContext.Provider>
    </div>)
}

export default App;
