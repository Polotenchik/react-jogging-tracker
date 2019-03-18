import React, {Component} from 'react';
import NavBar from './NavBar'; 

class Header extends React.Component{
    render () {
        return (
            <div>
                <div className="col-12">
                    <div className="row">
                        <NavBar />
                    </div> 
                </div>
            </div>
        );
    }
}

export default Header;