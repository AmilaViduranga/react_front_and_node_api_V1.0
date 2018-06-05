'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';
var Base                    = require('../Statics.Common');

export default class User extends Component {
    static get propTypes() {
        return {
            user: PropTypes.object,
            getAllUsers: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.getAllUsers = this.props.getAllUsers;
    }

    update(id, name) {
        var updatedName = prompt("Please enter updated name:", name);
        axios.put(Base.API + '/' + id, {name: updatedName}).then(results => {
            if(results.status == 200) {
                this.getAllUsers();
            }
        })
    }

    delete(id) {
        axios.delete(Base.API + '/' + id).then(results => {
            if(results.status == 200) {
                this.getAllUsers();
            }
        })
    }

    render() {
        return <tr>
            <td>{this.user._id || this.user.id}</td>
            <td>{this.user.name}</td>
            <button onClick={(e) => this.update(this.user._id || this.user.id, this.user.name)}>Update</button>&nbsp;
            <button onClick={(e) => this.delete(this.user._id || this.user.id)}>Delete</button>
        </tr>
    }
}

