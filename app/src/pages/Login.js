
import { useRef, useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { login_url } from '../consts';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const emailField = useRef(null);
    const passwordField = useRef(null);

    const navigate = useNavigate();

    const handleLogin = () => {
        let email = emailField.current.value;
        let password = passwordField.current.value;

        let reqData = { email, password };

        axios.post(login_url, reqData)
            .then(data => {
                let {token} = data.data;
                emailField.current.value = '';
                passwordField.current.value = '';
                localStorage.setItem('token', token);
                setErrorMessage('');
                navigate('/');
            })
            .catch(e => {
                setErrorMessage(e.message);
            });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" placeholder="email" ref={ emailField }/>
            <input type="password" placeholder="password" ref={ passwordField } />
            <button onClick={ handleLogin }>Login</button>
            <p>{ errorMessage }</p>
        </div>
    );
};

export default Login;