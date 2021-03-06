import React, { useState, useContext } from "react"
import { Segment, Form, Button, Input, Message, Icon } from "semantic-ui-react"
import { Link } from "@reach/router"
import styled from "@emotion/styled"

import FirebaseContext from "./../firebase/Context"

const PaddedSegment = styled(Segment)`
  padding: 30px !important;
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
    <PaddedSegment>
      <Form className={(submittingForm) ? "loading" : ""} onSubmit={handleSubmit}>
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
        <Link to="/sign-up">Don't have an account?</Link>
      </Form>
    </PaddedSegment>
  )
}

export default LoginForm
