import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchToken, checkAuth } from '../action';
import { keyAccessToken, keyTokenType } from '../constants';

class MainPage extends React.Component {

    componentDidMount() {
        this.props.checkAuth();
    }

    handleClick = () => {
        this.props.fetchToken();
        setTimeout(() => {
            localStorage.setItem(keyAccessToken, this.props.token.token[keyAccessToken]);
            localStorage.setItem(keyTokenType, this.props.token.token[keyTokenType]);
            this.props.checkAuth();
        }, 1000);
    }

    render () {

        if (this.props.isAuth.isAuth) {
            return (
                <div>
                    Go to jogging
                </div>
            )
        }
        return (
            <div>
                <div>
                    Picture
                </div>
                <div>
                    <Link onClick={ this.handleClick }>Let me in</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.token,
    isAuth: state.isAuth
});

const mapDispatchToProps = {
    fetchToken,
    checkAuth
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);