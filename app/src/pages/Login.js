
import './Login.css';

const Login = () => {

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Login</button>
        </div>
    );
};

export default Login;