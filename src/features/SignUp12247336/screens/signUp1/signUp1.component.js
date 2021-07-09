import React from 'react';
import {ImageProps, View} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
} from 'react-native-ui-kitten';
import {Button, Text} from 'react-native-ui-kitten';
import {SignUpForm1, SocialAuth} from '../../components/auth';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '../../components/common';
import {EmailValidator, PasswordValidator} from '../../core/validators';

// import {
//   ArrowForwardIconOutline,
//   HeartIconFill,
// } from '@src/assets/icons';

const imageSignUp1Bg = require('../../assets/images/image-background-sign-up-1.jpg');

class SignUp1Component extends React.Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    date: undefined,
    email: undefined,
    password: undefined,
    termsAccepted: false,
  };

  onFirstNameInputTextChange = firstName => {
    this.setState({firstName});
  };

  onLastNameValidationResult = lastName => {
    this.setState({lastName});
  };

  onDateInputTextChange = date => {
    this.setState({date});
  };

  onEmailInputTextChange = email => {
    this.setState({email});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  onTermsAcceptChange = termsAccepted => {
    this.setState({termsAccepted: !this.state.termsAccepted});
  };

  backgroundImage = imageSignUp1Bg;

  onSignUpButtonPress = () => {
    // this.props.onSignUpPress(this.state.formData);
    this.props.onSignUpPress({
      email: this.state.email,
      password: this.state.password,
    });
  };

  onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  onEwaButtonPress = () => {
    this.props.onEwaPress();
  };

  renderEwaButtonIcon = style => {
    const {themedStyle} = this.props;

    return <Icon {...themedStyle.ewaButtonIcon} name="heart" />;
  };

  renderSignInButtonIcon = style => {
    const {themedStyle} = this.props;

    return (
      <Icon {...themedStyle.signInButtonIcon} name="arrow-forward-outline" />
    );
  };

  validator() {
    const {firstName, lastName, date, email, password, termsAccepted} = this.state;

    return (
      firstName !== undefined &&
      lastName !== undefined &&
      date !== undefined &&
      email !== undefined &&
      EmailValidator(this.state.email) &&
      password !== undefined &&
      termsAccepted && PasswordValidator(password)
    );
  }

  render() {
    const {themedStyle} = this.props;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <ImageOverlay
          style={themedStyle.headerContainer}
          source={this.backgroundImage}>
          <Button
            appearance="ghost"
            style={themedStyle.ewaButton}
            textStyle={themedStyle.ewaButtonText}
            size="large"
            activeOpacity={0.75}
            icon={this.renderEwaButtonIcon}
            onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signUpContainer}>
            <Text style={themedStyle.signInLabel} category="h4">
              SIGN UP
            </Text>
            <Button
              style={themedStyle.signInButton}
              textStyle={themedStyle.signInButtonText}
              appearance="ghost"
              size="giant"
              activeOpacity={0.75}
              icon={this.renderSignInButtonIcon}
              onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>
        </ImageOverlay>
        <SocialAuth
          style={themedStyle.socialAuthContainer}
          hintStyle={themedStyle.socialAuthHint}
          iconStyle={themedStyle.socialAuthIcon}
          hint="Sign with a social account"
          onGooglePress={this.onGoogleButtonPress}
          onFacebookPress={this.onFacebookButtonPress}
          onTwitterPress={this.onTwitterButtonPress}
        />
        <View style={themedStyle.orContainer}>
          <View style={themedStyle.divider} />
          <Text style={themedStyle.orLabel} category="h5">
            OR
          </Text>
          <View style={themedStyle.divider} />
        </View>
        <Text style={themedStyle.emailSignLabel}>Sign up with Email</Text>
        {this.props.errorMsg && (
          <View style={themedStyle.msgContainer}>
            <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
          </View>
        )}
        <SignUpForm1
          style={themedStyle.formContainer}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          date={this.state.date}
          email={this.state.email}
          password={this.state.password}
          termsAccepted={this.state.termsAccepted}
          onFirstNameInputTextChange={this.onFirstNameInputTextChange}
          onLastNameValidationResult={this.onLastNameValidationResult}
          onDateInputTextChange={this.onDateInputTextChange}
          onEmailInputTextChange={this.onEmailInputTextChange}
          onPasswordInputTextChange={this.onPasswordInputTextChange}
          onTermsAcceptChange={this.onTermsAcceptChange}
        />
        <Button
          style={themedStyle.signUpButton}
          //textStyle={textStyle.button}
          size="large"
          disabled={!this.validator()}
          onPress={this.onSignUpButtonPress}>
          SIGN UP
        </Button>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp1 = withStyles(SignUp1Component, theme => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  headerContainer: {
    minHeight: 200,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  formContainer: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  ewaButtonText: {
    color: 'white',
    //...textStyle.button,
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  signInLabel: {
    flex: 1,
    color: 'white',
    ...textStyle.headline,
  },
  signInButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  signInButtonText: {
    color: 'white',
    //...textStyle.button,
  },
  signInButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  signUpButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  socialAuthHint: {
    ...textStyle.paragraph,
  },
  socialAuthIcon: {
    tintColor: theme['text-basic-color'],
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 52,
  },
  orLabel: {
    marginHorizontal: 8,
    ...textStyle.headline,
  },
  emailSignLabel: {
    alignSelf: 'center',
    marginTop: 8,
    ...textStyle.paragraph,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme['background-basic-color-3'],
  },
  msgContainer: {
    borderWidth: 2,
    borderColor: '#e3e3e3',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
