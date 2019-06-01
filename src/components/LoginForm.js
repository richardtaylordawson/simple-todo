import React, { useState, useContext, Fragment } from "react"
import { Form, Button, Input, Message } from "semantic-ui-react"
import styled from "@emotion/styled"

import FirebaseContext from "./../firebase/Context"

const FormContainer = styled(Form)`
  padding: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
`

const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [submittingForm, setSubmittingForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState({ message: "", display: false })
  const Firebase = useContext(FirebaseContext)

  const handleSubmit = () => {
    setSubmittingForm(true)

    Firebase
      .doCreateUserWithEmailAndPassword(emailAddress, password)
      .then(authUser => {
        setSubmittingForm(false)
        setErrorMessage({ display: false })
        console.log(authUser)
      })
      .catch(error => {
        setSubmittingForm(false)
        setErrorMessage({ message: error.message, display: true })
      });
  }

  return (
    <Fragment>
      <Message negative className={(errorMessage.display) ? "show" : "hidden"}>
        <Message.Header>Error</Message.Header>
        <p>{errorMessage.message}</p>
      </Message>
      <h2>Simple ToDo</h2>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <Form.Field>
          <label>Email Address</label>
          <Input
            icon="mail"
            iconPosition="left"
            type="email"
            placeholder="Email Address"
            onChange={e => setEmailAddress(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" primary fluid className={(submittingForm) ? "loading" : ""}>Log In</Button>
        <a>Forget Password?</a>
      </FormContainer>
    </Fragment>
  )
}

export default LoginForm
