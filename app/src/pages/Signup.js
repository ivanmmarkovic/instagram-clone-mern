
import { useRef, useState, useContext } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import {signup_url} from '../consts';

import './Signup.css';
import { AppContext } from '../context/AppContext';

const Signup = () => {

    const {isLogged, setIsLogged} = useContext(AppContext);

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const usernameField = useRef(null);
    const emailField = useRef(null);
    const passwordField = useRef(null);

    const handleSignup = () => {
        let username = usernameField.current.value;
        let email = emailField.current.value;
        let password = passwordField.current.value;

        let reqData = {
            username, 
            email,
            password
        };

        // fetch(url, {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Conetnt-Type': 'application/json'
        //     },
        //     body: JSON.stringify(reqData)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(e => console.log(e));

        axios.post(signup_url, reqData)
            .then(data => {
                // TODO save token, redirect to posts page
                // how to send token from server https://stackoverflow.com/questions/70210620/how-to-send-jwt-to-front-end-server-after-successful-login-for-storage-on-locals
                let {token} = data.data;
                usernameField.current.value = '';
                emailField.current.value = '';
                passwordField.current.value = '';

                // handle exceptions when set item
                // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem#exceptions
                localStorage.setItem('token', token);
                setErrorMessage('');
                setIsLogged(true);
                navigate('/');
            })
            .catch(e => {
                console.log(e);
                setErrorMessage(e.message);
            });
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <input type="text" placeholder="username" ref={ usernameField }/>
            <input type="email" placeholder="email" ref={ emailField } />
            <input type="password" placeholder="password" ref={ passwordField } />
            <button onClick={ handleSignup }>Signup</button>
            <p>{ errorMessage }</p>
        </div>

    );
};

export default Signup;