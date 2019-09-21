import React from 'react';
import { connect } from 'react-redux';
import { Logo } from '../components/Logo';
import NavBar from '../components/NavBar';
import Filter from '../components/Filter'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <div className="header">
                        <Logo />
                        { this.props.auth && <NavBar /> }
                        { this.props.pathName === '/jogs' && <Filter /> }
                    </div>
                </div>
            </header>
        );
    }
}


export default connect(null, null)(Header);