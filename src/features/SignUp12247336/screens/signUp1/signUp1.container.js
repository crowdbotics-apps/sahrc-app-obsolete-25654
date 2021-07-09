import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignUp1} from './signUp1.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _SignUp1Container extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'SignIn1';

  onSignUpPress = (data) => {
    this.props.navigation.goBack();
  };

  onSignInPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign In 1',
    });
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  onEwaPress = () => {};

  render() {
    return (
      <SignUp1
        onSignUpPress={this.props.signUp}
        onSignInPress={this.onSignInPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onEwaPress={this.onEwaPress}
        errorMsg={this.props.signUpErrors}

      />
    );
  }
}

const mapStateToProps = state => ({
  signUpErrors: state.SignUp01Blueprint.errors.SignUp
});

const mapDispatchToProps = {
  signUp: emailAuthActions.signUp
}

export const SignUp1Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignUp1Container);