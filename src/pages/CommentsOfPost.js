import React from 'react';
import {useLocation} from "react-router-dom";

const CommentsOfPost = () => {
    const {state:{id}} = useLocation();

    return (
        <div>
            Comments Of Post  {id}
        </div>
    );
};

export default CommentsOfPost;