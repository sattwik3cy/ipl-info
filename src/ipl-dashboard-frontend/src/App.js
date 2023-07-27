import './App.css';
import { Routes, Route, } from 'react-router-dom';
import TeamPage from './Page/TeamPage';
import MatchPage from './Page/MatchPage';
import HomePage from './Page/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/teams/:teamName" element={<TeamPage/>} />
        <Route exact path="/teams/:teamName/matches/:year" element={<MatchPage/>} />
        <Route exact path = "/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
