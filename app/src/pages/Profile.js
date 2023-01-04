import { parseJwt } from "../helpers/helpers";


const Profile = () => {

    const token = localStorage.getItem('token');
    const {username, id} = parseJwt(token);
    
    return (
        <div>
            <h1>Hello {username}</h1>
        </div>
    );

}


export default Profile;