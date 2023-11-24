import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Header';
import UserLogin from "./components/UserLogin";
import DefaultLanding from "./components/DefaultLanding";
import UserLanding from "./components/UserLanding";
import Support from './components/Support';
import Register from "./components/Registrationform";
import Upload from './components/Upload';
import AudioPlayeradmin from './components/AudioPlayeradmin';
import Delete from './components/Delete';

function App() {
  

  
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<DefaultLanding />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-landing" element={<UserLanding />} />
          <Route path="/support" element={<Support />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/create-new" element={<Upload />} />
          
          <Route path="/update-podcast" element={<AudioPlayeradmin />} />
          <Route path="/delete-podcast" element={<Delete />} />
        </Routes>
        
     
      </HashRouter>
      
    </div>
  );
}

export default App;
