import React, { useState } from "react"
import { Button } from "semantic-ui-react"

const FilterButtons = () => {
  const [currentFilter, setCurrentFilter] = useState("all")

  return (
    <Button.Group size="tiny">
      <Button
        toggle
        value="all"
        onClick={e => setCurrentFilter(e.target.value)}
        active={currentFilter === "all"}
      >
        All
      </Button>
      <Button
        toggle
        value="todo"
        onClick={e => setCurrentFilter(e.target.value)}
        active={currentFilter === "todo"}
      >
        ToDo
      </Button>
      <Button
        toggle
        value="completed"
        onClick={e => setCurrentFilter(e.target.value)}
        active={currentFilter === "completed"}>
        Completed
      </Button>
    </Button.Group>
  )
}

export default FilterButtons
