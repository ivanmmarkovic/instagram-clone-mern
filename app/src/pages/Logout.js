import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Logout = () => {

    const navigate = useNavigate();
    const { setIsLogged} = useContext(AppContext);
    setIsLogged(false);
    localStorage.removeItem('token');
    useEffect(() => navigate('/'));
    // navigate('/');

};

export default Logout;