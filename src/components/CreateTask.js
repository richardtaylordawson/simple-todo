import React, { useState } from "react"
import { Form, Input } from "semantic-ui-react"

const CreateTask = () => {
  const [task, setTask] = useState("")

  const handleSubmit = () => {
    if(task.length !== 0) {
      setTask("")
    }
  }

  return (
    <Form className="mb-45 mt-45" onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          fluid
          placeholder="Description..."
          value={task}
          onChange={e => setTask(e.target.value)}
          action={{ color: "green", labelPosition: "right", icon: "plus", content: "Add Task" }}
        />
      </Form.Field>
    </Form>
  )
}


export default CreateTask
