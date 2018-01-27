import React from 'react';
import {connect} from 'react-redux';
import {Field, focus, reduxForm, SubmissionError} from 'redux-form';
import {email, nonEmpty, required} from '../../../validators';
import Input from '../input'

export class SignupForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <form 
        className="signup-form" 
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field 
          name="firstName"
          type="text"
          component={Input}
          label="First Name"
          validate={[required, nonEmpty]}
        />
        <Field 
          name="lastName"
          type="text"
          component={Input}
          label="Last Name"
          validate={[required, nonEmpty]}
        />
        <Field 
          name="email"
          type="email"
          component={Input}
          label="Email"
          validate={[required, nonEmpty, email]}
        />
        <Field 
          name="password"
          type="password"
          component={Input}
          label="Password"
          validate={[required, nonEmpty]}
        />
        <Field 
          name="confirmPassword"
          type="password"
          component={Input}
          label="Confirm Password"
          validate={[required, nonEmpty]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Create Account
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'Signup'
})(SignupForm);