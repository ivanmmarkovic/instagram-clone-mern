import axios from "axios";
import { useRef } from "react";
import {create_story_url} from '../consts';

const Stories = () => {

    const nameInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleCreateStory = () => {

        const formData = new FormData();
        formData.append('name', nameInputRef.current.value);
        formData.append('file', fileInputRef.current.value);
        
        axios.post(create_story_url, formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }})
        .then(data => console.log(data))
        .catch(e => console.log(e));
    };

    return (
        <div className={"stories"}>
            <h1>Stories</h1>

            <input type="text" placeholder="Story name" ref={ nameInputRef }/>
            <br />
            <input type="file" name="file" ref={ fileInputRef } />
            <br />
            <button onClick={ handleCreateStory }>Create</button>
        </div>
    );

}


export default Stories;