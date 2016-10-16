import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'; 
import App from './components/App.jsx';
import Contact from './components/github/Contact.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component = {App}></Route>
        <Route path='/contact(/:article)' component = {Contact} > </Route>
    </Router>,
    app
)