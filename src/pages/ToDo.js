import React from "react"
import { Grid } from "semantic-ui-react"

import { TaskGroup, CreateTask, InlineContainer, FilterButtons, SizeButtons, PullRight, Logo, SignOutButton } from "./../components"

const ToDo = () => {
  return (
    <Grid centered>
      <Grid.Column computer={12} tablet={12} mobile={14}>
        <InlineContainer>
          <Logo />
          <PullRight>
            <SignOutButton />
          </PullRight>
        </InlineContainer>

        <CreateTask />

        <InlineContainer>
          <FilterButtons />
          <PullRight>
            <SizeButtons className="d-none-md-down" />
          </PullRight>
        </InlineContainer>

        <TaskGroup>

        </TaskGroup>
      </Grid.Column>
    </Grid>
  )
}

export default ToDo
