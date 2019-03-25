import React from 'react';
import Header from './Header';

export const Layout = ({ children }) => {
    return (
        <div className="content-wrapper">
            <Header />
            <div className="container">
                { children }
            </div>
        </div>
    );
};