import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchJogs } from '../action';

class JogsPage extends React.Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        this.props.fetchJogs();


        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1000);
        
    }

    renderJogItem(item) {
        return (
          
                <div key={ item.id }>
                    <div>
                        Picture
                    </div>
                    <div>
                        <p>{ moment(new Date(item.date*1000)).format('DD.MM.YYYY') }</p>
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
            )
        }
        
        return ( 
            <div>
               { this.props.jogs.map(jog => this.renderJogItem(jog)) }
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