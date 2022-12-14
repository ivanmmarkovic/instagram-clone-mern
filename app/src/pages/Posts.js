import axios from "axios";
import { useRef } from "react";
import {create_post_url} from '../consts';

const Posts = () => {

    const nameInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleCreatePost = () => {

        const formData = new FormData();
        formData.append('description', nameInputRef.current.value);
        formData.append('file', fileInputRef.current.files[0]);
        
        let token = localStorage.getItem('token');

        axios.post(create_post_url, formData, {headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }})
        .then(data => console.log(data))
        .catch(e => console.log(e));
    };

    return (
        <div className={"posts"}>
            <h1>Posts</h1>

            <input type="text" placeholder="Post description" ref={ nameInputRef }/>
            <br />
            <input type="file" name="file" ref={ fileInputRef } />
            <br />
            <button onClick={ handleCreatePost }>Create</button>
        </div>
    );

}


export default Posts;