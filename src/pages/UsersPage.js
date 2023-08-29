import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/users.api.service";
import UserComponent from "../components/UserComponent";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {

    const users = useLoaderData();

    return (
        <div>
            {
                users.map(value => <UserComponent data={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersPage;