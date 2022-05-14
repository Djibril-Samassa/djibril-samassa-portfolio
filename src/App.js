import './App.css';
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
import { createContext, useState } from 'react';

export const showContext = createContext()

function App() {
  const [showPres, setShowPres] = useState(true)

  const value = {
    showPres: showPres,
    setShowPres : setShowPres
  }

  return(
    <showContext.Provider value={value}>
      <BrowserRouter>
      <div className='app_container'>
        {showPres ? <Presentation/> : <Accueil/>}
      </div>
        <Routes>

          <Route path="/apropos" element={<About/>}/>
          <Route path="/competences" element={<Competences/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/parcours" element={<Parcours/>}/>
          <Route path="/coordonnees" element={<Coordonnees/>}/>
        </Routes>
      </BrowserRouter>
    </showContext.Provider>)
}

export default App;
