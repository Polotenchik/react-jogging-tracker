import React from 'react';
import { connect } from 'react-redux';
import { Logo } from '../components/Logo';
import NavBar from '../components/NavBar';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <div className="header">
                        <Logo />
                        { this.props.isAuth.isAuth && <NavBar /> }
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.isAuth
});

export default connect(mapStateToProps, null)(Header);