import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import FilterPanel from '../components/FilterPanel';

const Layout = (props) => {
    return (
        <div className="content-wrapper">
            <Header 
                auth={ props.isAuth.isAuth }
                pathName={ location.pathname } 
            />
            { props.isFilterOn.isFilterOn && <FilterPanel /> }
            <div className="container">
                { props.children }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuth: state.isAuth,
    isFilterOn: state.isFilterOn
});
  
export default connect(mapStateToProps, null)(Layout);