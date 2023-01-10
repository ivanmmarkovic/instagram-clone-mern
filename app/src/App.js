
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { AppContext } from './context/AppContext';
import { useState } from 'react';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Posts from './pages/Posts';

function App() {

  const [isLogged, setIsLogged] = useState(false); 

  return (
    <AppContext.Provider value={{ isLogged, setIsLogged }}>
    <Router>
      <div className='app'>
        <Navigation />

        <Routes>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/login'} element={ <Login /> } />
          <Route path={'/signup'} element={ <Signup /> } />
          <Route path={'/logout'} element={ <Logout /> } />

          <Route path={'/posts'} element={ <Posts /> } />
          <Route path={'/profile'} element={ <Profile /> } />
        </Routes>
          
      </div>
    </Router>

    </AppContext.Provider>
  );
}

export default App;
