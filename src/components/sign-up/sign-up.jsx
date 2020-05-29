import React from 'react';

import './sign-up.scss';

import {
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
    };
  }

  handleSubimt = async (event) => {
    event.preventDefault();
    const { username, email, password, passwordCheck } = this.state;

    if (password !== passwordCheck) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      createUserProfileDocument(user, { username });

      this.setState({
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, passwordCheck } = this.state;
    return (
      <div className="sign-up">
        <h2>Need an account? Sign Up!</h2>

        <form onSubmit={this.handleSubimt}>
          <FormInput
            name="username"
            type="text"
            label="username"
            value={username}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="passwordCheck"
            type="password"
            label="confirm password"
            value={passwordCheck}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
