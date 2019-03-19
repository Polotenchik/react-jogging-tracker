import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchJogs } from '../action';

class JogsPage extends React.Component {

    componentDidMount() {
        this.props.fetchJogs();
    }

    renderJogItem = (item) => {
        return (
          
                <div key={ item.id }>
                    <div>
                        Picture
                    </div>
                    <div>
                        <p>{ item.date }</p>
                        <p><span>Distance:</span> { item.distance } km</p>
                        <p><span>Time:</span> { item.time } min</p>
                    </div>
                </div>
          
        );
    }

    render () {

        if (!!this.props.jogs) {
            return (
                this.props.jogs.map(jog => { this.renderJogItem(jog)}) 
            );
        }

        return (
            <div>
                <div>
                    Jogs
                </div>
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