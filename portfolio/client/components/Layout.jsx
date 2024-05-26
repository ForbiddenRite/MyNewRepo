/* Layout.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
import React from "react";
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <nav>
                <img class="nav-icon" src="./src/assets/starIconMod.png"></img>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/education">Education</Link>|
                <Link to="/project">Project</Link> |
                <Link to="/service">Service</Link> |
                <Link to="/contact">Contact</Link>
            </nav>
            <hr></hr>
        </>
    );
}