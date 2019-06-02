import React, { useState } from "react"
import { Button } from "semantic-ui-react"

const SizeButtons = ({ className }) => {
  const [currentSize, setCurrentSize] = useState("m")

  return (
    <Button.Group size="tiny" className={className}>
      <Button
        toggle
        value="s"
        onClick={e => setCurrentSize(e.target.value)}
        active={currentSize === "s"}
      >
        S
      </Button>
      <Button
        toggle
        value="m"
        onClick={e => setCurrentSize(e.target.value)}
        active={currentSize === "m"}
      >
        M
      </Button>
      <Button
        toggle
        value="l"
        onClick={e => setCurrentSize(e.target.value)}
        active={currentSize === "l"}
      >
        L
      </Button>
    </Button.Group>
  )
}

export default SizeButtons
