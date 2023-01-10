import axios from "axios";
import { useRef } from "react";
import {create_post_url} from '../consts';

const Posts = () => {

    const nameInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleCreatePost = () => {

        const formData = new FormData();
        formData.append('name', nameInputRef.current.value);
        formData.append('file', fileInputRef.current.files[0]);
        
        axios.post(create_post_url, formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }})
        .then(data => console.log(data))
        .catch(e => console.log(e));
    };

    return (
        <div className={"posts"}>
            <h1>Posts</h1>

            <input type="text" placeholder="Post name" ref={ nameInputRef }/>
            <br />
            <input type="file" name="file" ref={ fileInputRef } />
            <br />
            <button onClick={ handleCreatePost }>Create</button>
        </div>
    );

}


export default Posts;