import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import {getAllUsers, getPostsOfCurrentUser} from "./services/users.api.service";
import PostsOfUserPage from "./pages/PostsOfUserPage";
import {getAllPosts} from "./services/posts.api.service";
import CommentsOfPost from "./pages/CommentsOfPost";



const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'users',
                element:<UsersPage/>,
                loader: getAllUsers
            },
            {
               path:'posts',
               element:<PostsPage/>,
                loader:getAllPosts,
                children:[
                    {
                        path:':id',
                        element:<CommentsOfPost/>
                    }
                ]
            },
            {
                path:'comments',
                element:<CommentsPage/>
            },
            {
                path:'users/:id',
                element:<PostsOfUserPage/>,
                loader:getPostsOfCurrentUser
            }
        ]}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={routes}/>
);

