import React from 'react';
import { Link, Redirect } from 'react-router';
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
                    <div>
                    You have already register
                    </div>
                    <div>
                        <Link to="/jogs">Go to jog</Link>
                    </div>
                </div>
            );
        }
        return (
            <div className="panel-let-in">
                <div className="image-wrapper">
                    <img src='../icons/bear.svg' />
                </div>
                <div>
                    <div onClick={ this.handleClick }>Let me in</div>
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