import React from 'react';
import {connect} from 'react-redux';
import {Field, focus, reduxForm} from 'redux-form';
import {email, nonEmpty, required} from '../../../validators';
import Input from '../input';

export class LoginForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field
          name=""
          type=""
          placeholder=""
          component={Input}
          validate={[required, nonEmpty]}
        />
        <Field
        name=""
        type=""
        placeholder=""
        component={Input}
        validate={[required, nonEmpty]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Log In
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);

// https://gorangajic.github.io/react-icons/index.html For React Icons