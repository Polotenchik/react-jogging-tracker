import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchJogs } from '../action';

class JogsPage extends React.Component {

    componentDidMount() {
        this.props.fetchJogs();
    }
    
    render () {

        return (
            <div>
                <div>
                    Jogs
                </div>
                <div>
                        Page
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     token: state.token,
//     isAuth: state.isAuth
// });

const mapDispatchToProps = {
    fetchJogs
};
  
export default connect(null, mapDispatchToProps)(JogsPage);