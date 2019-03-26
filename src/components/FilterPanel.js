import React, {Component} from 'react';
import { connect } from 'react-redux';
//import {getDataFormFilter, changeStateFilter, checkStateFilter} from "../../actions";

class FilterPanel extends React.Component {

    // elementFilterWrapper = {};

    // componentWillUnmount(){
    //     this.props.changeStateFilter(true);
    //     this.props.checkStateFilter(false);
    // }

    // showFilterForm = () =>{
    //     return  this.props.currentStateFilter ? {bottom: -this.elementFilterWrapper.offsetHeight} : {bottom: "0"};
    // };

    // getFilterWrapper = (node) => {
    //     this.elementFilterWrapper = node;
    // };

    // getCorrectDate = (regexp, value) =>{
    //     let arrayDate = regexp.exec(value);
    //     let date = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
    //     return date.getTime()  / 1000;
    // };

    // getFormData = (e) => {
    //     e.preventDefault();
    //     let regexp = new RegExp('(\\d{2})[.](\\d{2})[.](\\d{4})$');
    //     let dateFrom = e.target.elements.date_from.value;
    //     let dateTo = e.target.elements.date_to.value;
    //     if ((regexp.test(dateFrom) && regexp.test(dateTo)) || (dateFrom === "" && dateTo === "")) {
    //         let dateForm = {
    //             dateFrom: "",
    //             dateTo: ""
    //         };
    //         if (dateFrom !== "") {
    //             dateForm = {
    //                 dateFrom:  dateFrom,
    //                 dateTo:  dateTo
    //             };
    //         }
    //         this.props.getDataFormFilter(dateForm);
    //     }
    //     else{
    //         alert("Format date: 'dd.mm.yyyy'");
    //     }

    // };

    render() {
        return (
            <div className="panel-filter">
                <form id="filter" method="post">
                    <div className="panel-filter-item">
                        <label htmlFor="fromDate">Date from</label>
                        <input id="fromDate" name="fromDate" type="text" placeholder="15.05.2017" />
                    </div>
                    <div className="panel-filter-item">
                        <label htmlFor="toDate">Time</label>
                        <input id="toDate" name="toDate" type="text" placeholder="15.05.2019" />
                    </div>               
                </form>
             </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         currentStateFilter: state.filter.stateFilter,
//         dataForm: state.filter.dataForm
//     };
// }

// function matchDispatchToProps(dispatch){
//     return bindActionCreators({
//         getDataFormFilter: getDataFormFilter,
//         checkStateFilter: checkStateFilter,
//         changeStateFilter: changeStateFilter
//     }, dispatch)
// }

export default connect(null, null)(FilterPanel);