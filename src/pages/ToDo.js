import React from "react"
import { Grid } from "semantic-ui-react"

import { ToDoItemGroup, CreateToDoItem, InlineContainer, FilterButtons, SizeButtons, PullRight, Logo, SignOutButton } from "./../components"
import ToDoItem from "../components/ToDoItem";

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

        <CreateToDoItem />

        <InlineContainer>
          <FilterButtons />
          <PullRight>
            <SizeButtons />
          </PullRight>
        </InlineContainer>

        <ToDoItemGroup />
      </Grid.Column>
    </Grid>
  )
}

export default ToDo
