import React from 'react';
import {Header} from "../components/Heeader/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
           <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};