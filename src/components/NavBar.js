import React from 'react';
import { Link } from "react-router";

class NavBar extends React.Component {

    render() {
        return (
            <nav>
                <Link to="/jogs">Jogs</Link>
                <Link to="/info">Info</Link>
                <Link to="/contact">Contact us</Link>
            </nav>
        );
    }
}

export default NavBar;