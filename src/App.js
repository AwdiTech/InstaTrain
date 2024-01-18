import logo from './logo.svg';
import './App.css';
import Workout from './pages/Workout/Workout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/workout' element={<Workout />} />
          <Route path='/' element={<Home />}>
            {/* Nested Route for Home */}
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
