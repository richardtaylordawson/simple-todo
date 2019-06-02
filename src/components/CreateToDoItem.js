import React, { useState } from "react"
import { Form, Input } from "semantic-ui-react"

const CreateToDoItem = () => {
  const [newItem, setNewItem] = useState("")

  const handleSubmit = () => {
    if(newItem.length !== 0) {
      setNewItem("")
    }
  }

  return (
    <Form className="mb-45 mt-45" onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          fluid
          placeholder="Item to add..."
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          action={{ color: "green", labelPosition: "right", icon: "plus", content: "Add Item" }}
        />
      </Form.Field>
    </Form>
  )
}


export default CreateToDoItem
