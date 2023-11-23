import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Header';
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import DefaultLanding from "./components/DefaultLanding";
import UserLanding from "./components/UserLanding";
import AdminLanding from './components/AdminLanding';
import Support from './components/Support';
import Footer from "./components/Footer";
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
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-landing" element={<UserLanding />} />
          <Route path="/admin-landing" element={<AdminLanding />} />
          <Route path="/support" element={<Support />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/create-new" element={<Upload />} />
          
          <Route path="/update-podcast" element={<AudioPlayeradmin />} />
          <Route path="/delete-podcast" element={<Delete />} />
        </Routes>
        
     
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
