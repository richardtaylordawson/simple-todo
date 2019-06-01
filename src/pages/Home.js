import React from "react"
import { Grid } from "semantic-ui-react"
import styled from "@emotion/styled"

import LoginForm from "../components/LoginForm"

const Container = styled.div`
  padding-top: 60px;
`

const Home = () => (
  <Container>
    <Grid centered>
      <Grid.Column computer={5} tablet={8} mobile={12}>
        <LoginForm />
      </Grid.Column>
    </Grid>
  </Container>
)

export default Home
