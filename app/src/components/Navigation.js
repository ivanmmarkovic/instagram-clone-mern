
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </nav>

    );

};

export default Navigation;