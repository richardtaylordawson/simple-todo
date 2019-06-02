import React, { useState } from "react"
import { Button } from "semantic-ui-react"

const FilterButtons = () => {
  const [currentFilter, setCurrentFilter] = useState("all")

  return (
    <Button.Group size="tiny">
      <Button
        toggle
        name="all"
        onClick={e => setCurrentFilter(e.target.name)}
        active={currentFilter === "all"}
      >
        All
      </Button>
      <Button
        toggle
        name="todo"
        onClick={e => setCurrentFilter(e.target.name)}
        active={currentFilter === "todo"}
      >
        ToDo
      </Button>
      <Button
        toggle
        name="completed"
        onClick={e => setCurrentFilter(e.target.name)}
        active={currentFilter === "completed"}>
        Completed
      </Button>
    </Button.Group>
  )
}

export default FilterButtons
