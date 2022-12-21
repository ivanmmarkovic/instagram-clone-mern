
import { useRef } from 'react';
import axios from 'axios';

import {url} from '../consts';

import './Signup.css';

const Signup = () => {

    const usernameField = useRef(null);
    const emailField = useRef(null);
    const passwordField = useRef(null);

    const handleSignup = () => {
        let username = usernameField.current.value;
        let email = emailField.current.value;
        let password = passwordField.current.value;
        console.log(username, email, password);

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

        axios.post(url, reqData)
            .then(data => {
                // TODO save token, redirect to posts page
                // how to send token from server https://stackoverflow.com/questions/70210620/how-to-send-jwt-to-front-end-server-after-successful-login-for-storage-on-locals
                console.log(data);
            })
            .catch(e => console.log(e));
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <input type="text" placeholder="username" ref={ usernameField }/>
            <input type="email" placeholder="email" ref={ emailField } />
            <input type="password" placeholder="password" ref={ passwordField } />
            <button onClick={ handleSignup }>Signup</button>
        </div>

    );
};

export default Signup;