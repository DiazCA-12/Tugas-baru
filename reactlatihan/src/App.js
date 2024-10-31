/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dasboard from './komponen/Dasboard';
import DetailAnime from './komponen/DetailAnime'; // Pastikan ini adalah path yang benar
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route untuk Dashboard */}
          <Route path="/" element={<Dasboard />} />
          
          {/* Route untuk Detail Anime */}
          <Route path="/detail/:id" element={<DetailAnime />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

