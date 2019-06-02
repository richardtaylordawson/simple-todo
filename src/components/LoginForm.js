import React, { useState, useContext, Fragment } from "react"
import { Form, Button, Input, Message, Icon } from "semantic-ui-react"
import { Link } from "@reach/router"
import styled from "@emotion/styled"

import FirebaseContext from "./../firebase/Context"

const FormContainer = styled(Form)`
  padding: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 1px 2px #ccc;
`

const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [submittingForm, setSubmittingForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState({ message: "", display: false })
  const Firebase = useContext(FirebaseContext)

  const handleSubmit = () => {
    setSubmittingForm(true)

    Firebase.doSignInWithEmailAndPassword(emailAddress, password)
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
      <FormContainer className={(submittingForm) ? "loading" : ""} onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <Message negative className={(errorMessage.display) ? "show" : "hidden"}>
          <Message.Header>Error</Message.Header><Icon name="close" onClick={ () => { setErrorMessage({ "message": "", display: false }) } }/>
          <p>{errorMessage.message}</p>
        </Message>
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
        <Button type="submit" color="green" fluid className="mb-14">Log In</Button>
        <Link to="/forgot">Forget Password?</Link>
      </FormContainer>
    </Fragment>
  )
}

export default LoginForm
