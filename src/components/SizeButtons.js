import React, { useState } from "react"
import { Button } from "semantic-ui-react"

const SizeButtons = () => {
  const [currentSize, setCurrentSize] = useState("m")

  return (
    <Button.Group size="tiny">
      <Button
        name="s"
        toggle
        onClick={e => setCurrentSize(e.target.name)}
        active={currentSize === "s"}
      >
        S
      </Button>
      <Button
        name="m"
        toggle
        onClick={e => setCurrentSize(e.target.name)}
        active={currentSize === "m"}
      >
        M
      </Button>
      <Button
        name="l"
        toggle
        onClick={e => setCurrentSize(e.target.name)}
        active={currentSize === "l"}
      >
        L
      </Button>
    </Button.Group>
  )
}

export default SizeButtons
