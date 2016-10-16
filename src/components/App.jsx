import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';
import {Link} from 'react-router';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'sashamihalache',
			userData: [],
			userRepos: [],
			perPage: 5
		};
	}

	// GET user's profile info from github
	getUserData() {
		$.ajax({
			url: "https://api.github.com/users/" + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function (data) {
				this.setState({ userData: data });
				// console.log(data);
			}.bind(this),
			error: function (xhr, status, error) {
				this.setState({ userData: null });
				console.log(xhr, status, error);
			}.bind(this)
		});
	}

	// GET user's repos from github
	getUserRepos() {
		$.ajax({
			url: "https://api.github.com/users/" + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
			dataType: 'json',
			cache: false,
			success: function (data) {
				// console.log(data);
				this.setState({ userRepos: data });
			}.bind(this),
			error: function (xhr, status, error) {
				this.setState({ userData: null });
			}.bind(this)
		});
	}

	// this.setState is a setter for the constructor attrs, can also have a callback
	handleFormSubmit(username) {
		this.setState({ username: username }, function () {
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	// ...this.state used in order to pass all objects (note: they are sent async)
	// onFormSubmit is coming from Search.jsx
	render() {
		return (
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this) } />
				<Profile {...this.state} />
				<br />
				<Link to="/contact"><button className='btn btn-primary'>Go To Contact</button></Link>
			</div>
		)
	}
}

// PropTypes.w/e in order to check
App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: 'aa5d4acff1f7e803e232',
	clientSecret: 'f71e7464794bb3434032cdd2a24a1284fea8eb9c'
}

export default App