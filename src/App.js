


import './App.css';
 //import Navbare from './components/navbar/Navbare';
 import Praticiens from './components/praticiens/Praticiens';
import Home from './components/home/Home';
import Inscription from './components/inscription/Inscription';
import Sign from './components/sign/Sign';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Medecin from './components/admin/medecin/Medecin';
import Dashboard from './components/dashboard/Dashboard';
import Analytics from './components/analytics/Analytics';
import Profil from './components/profil/Profil';
import Ordenance from './components/ordenance/Ordenance';
import Appointement from './components/appointement/Appointement.';

function App() {
    
  return (
    <div className="App">
      
      {/* <Women/> */}
    <BrowserRouter>
   
   
    <Routes> 
      
    <Route path="/" element={<Home/>} />
    <Route path="/sign" element={<Sign/>} />
    <Route path="/inscription" element={<Inscription/>} />
    <Route path="praticiens" element={< Praticiens/>} />
    <Route path="/sign/admin" element={< Admin/>} />
    <Route path="/admin/medecin" element={< Medecin/>} />
    <Route path="/dashboard" element={< Dashboard/>} />
    <Route path="/analytics" element={< Analytics/>} />
    <Route path="/ordenance" element={< Ordenance/>} />
    <Route path="/profil" element={< Profil/>} />
    <Route path="/appointement" element={< Appointement/>} />

    </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
