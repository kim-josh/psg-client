import React from 'react';
import {conenect} from 'react-redux';

import TiUserAdd from 'react-icons/lib/ti/user-add';
import SignupForm from './signup-form';

export default class SignupPage extends React.Component {
  
  render() {
    return (
      <div className="signup-page">
        {/*<TiUserAdd />*/}
        <h2>Register Your Account</h2>
        <SignupForm />
      </div>
    );
  }
}