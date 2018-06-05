'use strict';
import React, {Component}   from 'react';
import Users				from './Modules/Users';
import AddUser 				from './Controllers/AddUser';
import axios                from 'axios';

var Base  					= require('./Statics.Common');

export default class AppContainer extends Component {
   	constructor(props) {
       	super(props);
       	this.state = {
       		users: []
       	}
       	this.getAllUsers();
   	}

    getAllUsers() {
        axios.get(Base.API + '/').then(res => {
            this.setState({
				users: res.data.data || res.data
			});
        })
    }

   	addUser(user) {
   		axios.post(Base.API + '/', {name: user.name}).then(result => {
   			if(result.status == 200) {
   				this.getAllUsers();
			}
		}).catch(err => {
			alert(err);
		})
   	}

   	render() {
        return <div>
           <h2>Users App</h2>
            <AddUser addUser={user => this.addUser(user)}/>
            <Users users={this.state.users} getAllUsers = {() => this.getAllUsers()}/>
        </div>;
	}
}
