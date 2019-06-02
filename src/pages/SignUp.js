import React from "react"
import { Grid } from "semantic-ui-react"

import { Logo, SignUpForm} from "../components"

const SignUp = () => (
  <Grid centered>
    <Grid.Column computer={5} tablet={8} mobile={14}>
      <Logo />
      <SignUpForm />
    </Grid.Column>
  </Grid>
)

export default SignUp
