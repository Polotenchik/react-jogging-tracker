import React from 'react';
import { Logo } from '../components/Logo';
import NavBar from '../components/NavBar';

export default class Header extends React.Component {
    render () {
        return (
            <header>
                <div className="header-wrapper">
                    <div className="header">
                        <Logo />
                        <NavBar />
                    </div>
                </div>
            </header>
        );
    }
}