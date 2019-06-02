import React from "react"
import { Segment } from "semantic-ui-react"

const TaskGroup = ({ children }) => {
  return (
    <Segment.Group>
      {children}
    </Segment.Group>
  )
}

export default TaskGroup
