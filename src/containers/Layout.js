import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => (
    <div className="col-12 content-wrapper">
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <Header />
                    { children }
                </div>
            </div>
        </div>
    </div>
)

export default Layout;