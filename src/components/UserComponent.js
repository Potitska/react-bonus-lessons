import React from 'react';
import {useNavigate} from "react-router-dom";

const UserComponent = ({data}) => {

    const navigate = useNavigate();
    const showPostsOfThisUser = ()=> {
        navigate({pathname:`${data.id}`},{state: {...data}});
    }

    return (
        <div>
            {data.name}
            <button onClick={showPostsOfThisUser}>show posts</button>
        </div>
    );
};

export default UserComponent;