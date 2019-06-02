import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  float: right;
`

const PullRight = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default PullRight
