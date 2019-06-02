import React from "react"
import { Grid } from "semantic-ui-react"

import Logo from "../components/Logo"
import LoginForm from "../components/LoginForm"

const Home = () => (
  <Grid centered>
    <Grid.Column computer={5} tablet={8} mobile={14}>
      <Logo />
      <LoginForm />
    </Grid.Column>
  </Grid>
)

export default Home
