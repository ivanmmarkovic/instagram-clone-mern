
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {



  return (
    <Router>
      <div className='app'>
        <Navigation />


        <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/login'} element={ <Login /> } />
        <Route path={'/signup'} element={ <Signup /> } />
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
