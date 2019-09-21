import React from 'react';
import { Link } from "react-router";

class NavBar extends React.Component {

    render() {
        return (
            <nav>
                <ul className="menu">
                    <li><Link to="/jogs">Jogs</Link></li>
                    <li><Link to="/info">Info</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;