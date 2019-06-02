import React from "react"
import { Grid } from "semantic-ui-react"

import { Logo, LoginForm } from "../components"

const LogIn = () => (
  <Grid centered>
    <Grid.Column computer={5} tablet={8} mobile={14}>
      <Logo />
      <LoginForm />
    </Grid.Column>
  </Grid>
)

export default LogIn
