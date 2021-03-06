import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {
  auth,
  signInWithGoogle,
} from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubimt = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
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
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubimt}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton value="Sign In" />
            <CustomButton
              isGoogleSignIn
              onClick={signInWithGoogle}
              value="Sign In With Google"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
