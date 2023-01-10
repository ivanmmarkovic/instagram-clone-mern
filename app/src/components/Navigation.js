
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './Navigation.css';

const Navigation = () => {

    const {isLogged} = useContext(AppContext);

    return (
        <nav>
          { !isLogged && <Link to="/">Home</Link> }
          { !isLogged && <Link to="/signup">Signup</Link> }
          { !isLogged && <Link to="/login">Login</Link>}

          {isLogged &&  <Link to="/profile">Profile</Link>}
          {isLogged &&  <Link to="/posts">Posts</Link>} 
          {isLogged &&  <Link to="/logout">Logout</Link>}
          
        </nav>

    );

};

export default Navigation;