import React from 'react';
import moment from 'moment';
import { Link } from "react-router";
import { connect } from 'react-redux';
import { addJog as addJogApi } from '../api'

class CreateJogPage extends React.Component {

    elementSubmit = {};

    getElementSubmit = (node) => {
        this.elementSubmit = node;
    };

    handlerClickSave = (e) => {
        this.elementSubmit.click();
    };

    submitForm = async (e) => {
        e.preventDefault();
        const data = {
            distance: e.target.elements.distance.value,
            time: e.target.elements.time.value,
            date: e.target.elements.date.value
        };
        if (moment(data.date, 'DD.MM.YYYY').isValid()) {
            await addJogApi(data);
        } else {
            alert("Incorrect data");
        }
    
    };

    render() {
        return (
            <div>
                <form id="createJog" method="post" onSubmit={ this.submitForm }>
                    <label>
                        Distance
                        <input 
                            id="distance" 
                            name="distance" 
                            type="number" 
                            placeholder="5"
                        />
                    </label>
                    <label>
                        Time
                        <input
                            id="time" 
                            name="time" 
                            type="number" 
                            placeholder="3"
                        />
                    </label>
                    <label>
                        Date
                        <input 
                            id="date"
                            type="text" 
                            name="date"  
                            placeholder="23.02.2017"
                        />
                    </label>
                    <Link to="/jogs" onClick={this.handlerClickSave}>Save</Link>
                    <input 
                        type="submit" 
                        // style={{"display":"none"}} 
                        ref={this.getElementSubmit}
                    />
                </form>
                <Link to="/jogs" className="cancel" onClick={ this.handlerClickLink }> 
                    CAncel
                    {/* <img src="images/panel/cancel.svg"/> */}
                </Link>
            </div>
        );
    }
}

export default connect(null, null)(CreateJogPage);