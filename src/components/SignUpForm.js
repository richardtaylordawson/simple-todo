import React, { useState, useContext } from "react"
import { Segment, Form, Button, Input, Message, Icon } from "semantic-ui-react"
import styled from "@emotion/styled"

import FirebaseContext from "./../firebase/Context"

const PaddedSegment = styled(Segment)`
  padding: 30px !important;
`

const SignUpForm = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submittingForm, setSubmittingForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState({ message: "", display: false })
  const Firebase = useContext(FirebaseContext)

  const handleSubmit = () => {
    if(password !== confirmPassword) {
      return setErrorMessage({ message: "Passwords must match", display: true })
    }

    setSubmittingForm(true)

    Firebase.doCreateUserWithEmailAndPassword(emailAddress, password)
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
        <h2>Sign Up</h2>
        <p className="italic">It's free and easy</p>
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
        <Form.Field>
          <label>Confirm Password</label>
          <Input
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="Password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" color="green" fluid className="mb-14">Sign Up</Button>
        <p className="italic">By clicking the Sign Up button, you agree to our Terms & Conditions, and Privacy Policy</p>
      </Form>
    </PaddedSegment>
  )
}

export default SignUpForm
