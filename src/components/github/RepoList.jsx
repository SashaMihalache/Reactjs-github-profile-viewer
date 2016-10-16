import React, {Component} from 'react';
import Repo from './Repo.jsx'

class RepoList extends Component {
 
	render() {
		return (
			<div>
  			 	<ul className="list-group">
  			 		{	//map and return a Repo obj which is an li
  			 			//key gets passed in because each array item should be unique
  			 			this.props.userRepos.map(repo => {
  			 				return <Repo repo = {repo} key = {repo.id} {...this.props} />
  			 			})
  			 		}
  			 	</ul>
			</div>
			);
	}
}

export default RepoList