import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register';
import Header from './components/header/header';

class App extends Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });

            console.log(this.state);
          });
        }

        this.setState({ currentUser: userAuth });
      },
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in"
            component={SignInAndRegisterPage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
