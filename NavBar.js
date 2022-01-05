import React from "react";
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <h3>STAR-WARS</h3>
            <ul>
                <li><Link to = '/'>Chracters</Link></li>
                <li><Link to = '/Planets'>Planets</Link></li>
                <li><Link to = '/Starships'>Starships</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;