import React from 'react';
import {connect} from 'react-redux';
import TiUser from 'react-icons/lib/ti/user';

import LoginForm from './login-form';

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        {/*<TiUser />*/}
        <h2>Register Your Account</h2>
        <LoginForm />
      </div>
    );
  }
}