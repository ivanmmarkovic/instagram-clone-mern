
import {Link} from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
          <Link path="/">Home</Link>
          <Link path="/signup">Signup</Link>
          <Link path="/login">Login</Link>
        </nav>

    );

};

export default Navigation;