import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

import RNSmtpMailer from 'react-native-smtp-mailer';


export default function Feedback({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [feedback, setFeedback] = useState({ value: '', error: '' })

  const SendEmail = () => {
    const emailError = emailValidator(email.value)
    const feedbackError = nameValidator(feedback.value)

    if (emailError || feedbackError) {
        setEmail({ ...email, error: emailError })
        setFeedback({ ...feedback, error: feedbackError })
      return
    
    }
    
    RNSmtpMailer.sendMail({
        mailhost: "smtp.gmail.com",
        port: "465",
        ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
        username: "sindhu.reddy.578@gmail.com",
        password: "Kanna@302020",
        from:{email},
        recipients: "krishnareddy4challa@gmail.com",
        subject: "Armor, User Feedback!",
        htmlBody: {feedback},
      })
        .then(success => console.log(success))
        .catch(err => console.log(err));
  }

  return (
    <Background>
      
      <Logo />
      <Header>Tell Us more, How to Improve our app.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
        <TextInput
        label="Tell us More"
        returnKeyType="next"
        value={feedback.value}
        onChangeText={(text) => setFeedback({ value: text, error: '' })}
        error={!!feedback.error}
        errorText={feedback.error}
        maxlength={100}
        multiline
        numberOfLines={6}
      />
      <Button
        mode="contained"
        onPress={SendEmail}
        style={{ marginTop: 24 }}
      >
        Send
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
