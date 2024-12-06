import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TableRank from './Table';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <NavBar /> {/* Afficher la navbar */}
      <Container>
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/"  />
          {/* Route pour "/home" */}
          <Route path="/home" element={<Home />} />
          {/* Autres routes */}
          <Route path="/link" element={<TableRank />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
