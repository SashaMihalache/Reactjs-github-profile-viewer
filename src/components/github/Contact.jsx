import React, {Component} from 'react';
import {Link} from 'react-router';

class Contact extends Component {

    navigate(msg) {
        console.log(msg);
        this.props.history.pushState(null, '/');
        // this.props.history.replaceState(null, '/');
    }

    render() {
        const { params } = this.props;
        const { query } = this.props.location;
        const { date, filter}  = query;
        console.log(params);
        return (
            <div>
                <h1>Contact Page</h1>
                <h4>date : {date}, filter: {filter} </h4>
                <Link to="/"><button className="btn btn-primary">Go To Repos</button></Link>
                <button onClick = {this.navigate.bind(this) }>Featured</button>
            </div>
        )
    }
}

export default Contact