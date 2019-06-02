import React from "react"
import { Segment, Checkbox } from "semantic-ui-react"

const ToDoItem = () => {
  return (
    <Segment compact className="bg-green">
      <Checkbox style={{display: "inline"}} />
      <p style={{marginLeft: "25px"}}>Item to complete</p>
    </Segment>
  )
}

export default ToDoItem
