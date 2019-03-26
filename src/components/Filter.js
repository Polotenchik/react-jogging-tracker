import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../action';

class Filter extends React.Component {

    state = {
        active: false,
    }

    toggleFilter = () => {
        this.props.toggleFilter(this.state.active);  
        this.setState({
            active: !this.state.active,
        });       
    }

    render() {
        return (
            <div className="filter-wrapper" onClick={ this.toggleFilter }>
                {
                    this.state.active 
                    ? <img src="icons/icon_filter_active.svg" />
                    : <img src="icons/icon_filter.svg" />
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    toggleFilter
};
  
export default connect(null, mapDispatchToProps)(Filter);
