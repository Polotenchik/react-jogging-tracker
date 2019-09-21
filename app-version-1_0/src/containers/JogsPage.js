import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchJogs } from '../action';

class JogsPage extends React.Component {

    state = {
        isLoading: true,
    };

    componentDidMount() {
        this.props.fetchJogs();

        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 1000);
    }

    renderJogItem(item) {
        return (
            <div key={ item.id } className="row-jog">
                <div className="image-wrapper">
                    <img src="icons/icon_run.svg" />
                </div>
                <div className="description-wrapper">
                    <p className="date">{ moment(new Date(item.date*1000)).format('DD.MM.YYYY') }</p>
                    <p><span>Speed:</span> { ((item.distance/item.time)*60).toFixed(0) }</p>
                    <p><span>Distance:</span> { item.distance } km</p>
                    <p><span>Time:</span> { item.time } min</p>
                </div>
            </div>
        );
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            );
        }
    
        if (this.props.dateFrom && this.props.dateTo) {
            return (
                <div className="list-jogs-wrapper">
                { this.props.jogs.filter(jog =>
                    moment(moment(new Date(jog.date * 1000)).format('DD.MM.YYYY')).isBetween((moment(this.props.dateFrom, 'DD.MM.YYYY')), moment(this.props.dateTo, 'DD.MM.YYYY')))
                    .map(jog => this.renderJogItem(jog)) }
                </div>
            )
        }

        if (this.props.dateFrom) {
            return (
                <div className="list-jogs-wrapper">
                    { this.props.jogs.filter(jog =>
                        moment(moment(new Date(jog.date * 1000)).format('DD.MM.YYYY')).isAfter(moment(this.props.dateFrom, 'DD.MM.YYYY')))
                        .map(jog => this.renderJogItem(jog)) }
                </div>
            );
        }

        if (this.props.dateTo) {
            return (
                <div className="list-jogs-wrapper">
                    { this.props.jogs.filter(jog =>
                        moment(moment(new Date(jog.date * 1000)).format('DD.MM.YYYY')).isBefore(moment(this.props.dateTo, 'DD.MM.YYYY')))
                        .map(jog => this.renderJogItem(jog)) }
                </div>
            );
        }

        
        return ( 
            <div className="list-jogs-wrapper">
                <div className="jogs-container">
                    { !!this.props.jogs && this.props.jogs.map(jog => this.renderJogItem(jog)) }
                </div>
               <Link to='/newJog' className="add-jog">
                   <img src="icons/icon_add.svg"/>
               </Link>
            </div>    
        );
    }
}

const mapStateToProps = state => ({
    jogs: state.jogs.jogs,
    isFilterOn: state.isFilterOn.isFilterOn,
    dateFrom: state.isFilterOn.dateFrom,
    dateTo: state.isFilterOn.dateTo,
});

const mapDispatchToProps = {
    fetchJogs
};
  
export default connect(mapStateToProps, mapDispatchToProps)(JogsPage);