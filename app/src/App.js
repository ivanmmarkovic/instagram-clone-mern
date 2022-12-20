
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';

function App() {



  return (
    <Router>
      <div className='app'>
        <Navigation />

        <div className='signup-login'>
          <div className='left'>
            <img src="6823.jpg" width={'100%'} />
            <p><a href="https://www.freepik.com/free-vector/hand-holding-phone-isolated-flat-vector-illustration_9649007.htm#query=mobile%20screen&position=36&from_view=keyword">Image by pch.vector</a> on Freepik</p>
          </div>

          <div className='right'>
            <input type="text" />
            <input tpe="text" />
            <button>Login</button>
          </div>
        </div>        
      </div>
    </Router>
  );
}

export default App;
