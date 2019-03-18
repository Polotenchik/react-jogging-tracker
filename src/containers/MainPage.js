import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchToken } from '../action';

class MainPage extends React.Component {

    render () {
        return (
            <div>
                <div>
                    Picture
                </div>
                <div>
                    <Link onClick={ this.props.fetchToken() }>Let me in</Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchToken
};
  
export default connect(null, mapDispatchToProps)(MainPage);