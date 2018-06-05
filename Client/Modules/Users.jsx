'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import User                 from './User.jsx';


export default class Users extends Component {
  static get propTypes() {
    return {
      users: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.users = this.props.users;
    return <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            this.users.map(user => {
              return <User key={user._id || user.id} user={user} getAllUsers={() => this.props.getAllUsers()}/>
            })
          }
        </tbody>
      </table>
  </div>;
  }
}
