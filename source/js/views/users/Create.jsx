import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userCreate } from 'actions/app'


@connect(state => ({
  user: state.app.get('user'),
}))
export default class UserCreate extends Component {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func,
  }

	clickHandle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('submitHandle called, e.target  : ', e.target)
    window.tester = e.target
    const { dispatch } = this.props

    const username = e.target.parentElement.children['username'].value
    dispatch(userCreate(username));

	}

  render() {
    // get all users

    return (
      <div className='Home'>
        <h1>Create User</h1>

        <h2>Users:</h2>
        <p>
          {users}
        </p>

        <form>
        	<input type="text" name="username" placeholder="Alice Cooper"/> 
        	<button onClick={ this.clickHandle }>
            Create User
          </button>
        </form>
      </div>
    );
  }
}

