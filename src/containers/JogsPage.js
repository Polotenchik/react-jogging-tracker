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
});

const mapDispatchToProps = {
    fetchJogs
};
  
export default connect(mapStateToProps, mapDispatchToProps)(JogsPage);