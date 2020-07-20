import React from 'react';
import "./navbar.css";
import Authentication from "../Auth/Authentication";
import { Link } from "react-router-dom";

const NavBar = () => {
 

    return (
        <>
            <div className="bg-light border-right col-2 text-center navbar-expand-sm" id="sidebar-wrapper">
                <div className="container__navbar">
                    <img src="data:image/jpeg;base64,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" alt=" user" className="image-sizing" />
                </div>
                <div className="sidebar-heading">Welcome </div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/friends" className="list-group-item list-group-item-action bg-light">Friends</Link>
                    <Link to="/articles" className="list-group-item list-group-item-action bg-light">Articles</Link>
                    <Link to="/events" className="list-group-item list-group-item-action bg-light" >Events</Link>
                    <Link to="/tasks" className="list-group-item list-group-item-action bg-light">Tasks</Link>
                    <Link to="/login" className="list-group-item list-group-item-action bg-light">Login</Link>
                </div>
                <hr />
                <div className="div__messages__header">
                    Messages
                </div>
                <hr />
                <div className="div__messages__container container">
                     MessageList Call Here
                </div>
            </div>

        </>
    )
}
export default Authentication(NavBar);
