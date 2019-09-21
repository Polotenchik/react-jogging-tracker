import React from 'react';
import moment from 'moment';
import { Link } from "react-router";
import { connect } from 'react-redux';
import { isNumber } from '../helpers';
import { addJog as addJogApi } from '../api';

class CreateJogPage extends React.Component {

    elementSubmit = {};

    getElementSubmit = (node) => {
        this.elementSubmit = node;
    };

    handlerClickSave = () => {
        this.elementSubmit.click();
    };

    submitForm = async (e) => {
        e.preventDefault();
        const dataInput = {
            distance: e.target.elements.distance.value,
            time: e.target.elements.time.value,
            date: e.target.elements.date.value
        };
        if (moment(dataInput.date, 'DD.MM.YYYY').isValid() && isNumber(dataInput.distance) && isNumber(dataInput.time)) {
            await addJogApi(dataInput);
        } else {
            alert("Incorrect data");
        }
    
    };

    render() {
        return (
            <div className="panel-add-run">
                <form id="createJog" method="post" onSubmit={ this.submitForm }>
                    <div className="panel-add-run-item">
                        <label htmlFor="distance">Distance</label>
                        <input id="distance" name="distance" type="text" placeholder="5" />
                    </div>
                    <div className="panel-add-run-item">
                        <label htmlFor="time">Time</label>
                        <input id="time" name="time" type="text" placeholder="3" />
                    </div>
                    <div className="panel-add-run-item">
                        <label htmlFor="date">Date </label>
                        <input id="date" type="text" name="date" placeholder="23.02.2017" />
                    </div>
                    <Link to="/jogs" onClick={ this.handlerClickSave }>Save</Link>
                    <input type="submit" style={{"display":"none"}} ref={ this.getElementSubmit }/>
                </form>
                <Link to="/jogs" className="cancel">
                    <img src="icons/icon_cancel.svg"/>
                </Link>
            </div>
        );
    }
}

export default connect(null, null)(CreateJogPage);