import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Input,
} from 'react-native-ui-kitten';
import {CheckBox} from 'react-native-ui-kitten';
import {textStyle, ValidationInput} from '../../common';
import {
  DOBValidator,
  EmailValidator,
  NameValidator,
  PasswordValidator,
} from '../../../core/validators';

class SignUpForm1Component extends React.Component {
  

  isValid = value => {
    const {firstName, lastName, date, email, password, termsAccepted} = value;

    return (
      firstName !== undefined &&
      lastName !== undefined &&
      date !== undefined &&
      email !== undefined &&
      password !== undefined &&
      termsAccepted
    );
  };

  getStatus = valid => {
    return valid ? 'success' : 'danger';
  };

  passwordCaption = () => {
    return this.props.password && PasswordValidator(this.props.password)
      ? 'Password is good'
      : 'Password is at least 8 chars';
  };

  render() {
    const {
      style,
      themedStyle,
      firstName,
      lastName,
      date,
      email,
      password,
      termsAccepted,
      onFirstNameInputTextChange,
      onLastNameValidationResult,
      onDateInputTextChange,
      onEmailInputTextChange,
      onPasswordInputTextChange,
      onTermsAcceptChange,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <Input
          style={[themedStyle.input, themedStyle.firstNameInput]}
          textStyle={themedStyle.inputText}
          placeholder="Ally"
          label="FIRST NAME"
          autoCapitalize="words"
          status={firstName && this.getStatus(NameValidator(firstName))}
          value={firstName}
          onChangeText={onFirstNameInputTextChange}
        />
        <Input
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          placeholder="Watsan"
          label="LAST NAME"
          autoCapitalize="words"
          status={lastName && this.getStatus(NameValidator(lastName))}
          value={lastName}
          onChangeText={onLastNameValidationResult}
        />
        <Input
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          placeholder="18/10/1995"
          label="DATE OF BIRTHDAY"
          status={date && this.getStatus(DOBValidator(date))}
          value={date}
          onChangeText={onDateInputTextChange}
        />
        <Input
          style={themedStyle.input}
          textStyle={themedStyle.inputText}
          labelStyle={themedStyle.inputLabel}
          placeholder="ally.watsan@gmail.com"
          label="EMAIL"
          status={email && this.getStatus(EmailValidator(email))}
          value={email}
          onChangeText={onEmailInputTextChange}
          autoCapitalize="none"
        />
        <Input
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          captionTextStyle={textStyle.paragraph}
          label="PASSWORD"
          placeholder="Password"
          caption={this.passwordCaption()}
          secureTextEntry={true}
          status={password && this.getStatus(PasswordValidator(password))}
          value={password}
          onChangeText={onPasswordInputTextChange}
        />

        <CheckBox
          style={themedStyle.termsCheckBox}
          textStyle={themedStyle.termsCheckBoxText}
          checked={termsAccepted}
          text={
            'By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy'
          }
          onChange={onTermsAcceptChange}
        />
      </View>
    );
  }
}

export const SignUpForm1 = withStyles(SignUpForm1Component, theme => ({
  container: {},
  input: {
    marginTop: 16,
  },
  firstNameInput: {
    marginTop: 0,
  },
  termsCheckBox: {
    marginTop: 20,
  },
  termsCheckBoxText: {
    fontSize: 11,
    color: theme['text-hint-color'],
    ...textStyle.paragraph,
  },
}));
