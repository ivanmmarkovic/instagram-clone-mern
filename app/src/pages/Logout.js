import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Logout = () => {

    const navigate = useNavigate();
    const { setIsLogged} = useContext(AppContext);
    setIsLogged(false);
    navigate('/');
    return (
        <></>
    )

};

export default Logout;