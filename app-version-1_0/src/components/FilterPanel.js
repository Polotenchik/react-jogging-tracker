import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getFilterDateFrom, resetFilterDateFrom, getFilterDateTo, resetFilterDateTo } from '../action';

class FilterPanel extends React.Component {

    checkFromDate = (e) => {
        if (e.target.value.length === 10 && moment(e.target.value, 'DD.MM.YYYY').isValid()) {
            this.props.getFilterDateFrom(e.target.value);
        } else {
            this.props.resetFilterDateFrom();
        }
    }

    checkToDate = (e) => {
        if (e.target.value.length === 10 && moment(e.target.value, 'DD.MM.YYYY').isValid()) {
            this.props.getFilterDateTo(e.target.value);
        } else {
            this.props.resetFilterDateTo();
        }
    }

    render() {
        return (
            <div className="panel-filter">
                <form id="filter" method="post">
                    <div className="panel-filter-item">
                        <label htmlFor="fromDate">Date from</label>
                        <input 
                            id="fromDate" 
                            name="fromDate" 
                            type="text" 
                            placeholder="15.05.2017"
                            onChange={ this.checkFromDate }
                        />
                    </div>
                    <div className="panel-filter-item">
                        <label htmlFor="toDate">Date to</label>
                        <input 
                            id="toDate" 
                            name="toDate" 
                            type="text" 
                            placeholder="15.05.2019"
                            onChange={ this.checkToDate } 
                        />
                    </div>               
                </form>
             </div>
        );
    }
}

const mapDispatchToProps = {
    getFilterDateFrom,
    resetFilterDateFrom,
    getFilterDateTo,
    resetFilterDateTo
};
  
export default connect(null, mapDispatchToProps)(FilterPanel);