import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  * {
    display: inline;
  }

  margin-bottom: 14px;
`

const InlineContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default InlineContainer
