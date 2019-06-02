import React, { useState, useContext } from "react"
import { Button } from "semantic-ui-react"
import { navigate } from "@reach/router"

import FirebaseContext from "./../firebase/Context"

const SignOutButton = () => {
  const [loading, setLoading] = useState(false)
  const Firebase = useContext(FirebaseContext)

  const toggleSignOut = () => {
    setLoading(true)
    setTimeout(() => {
      Firebase.doSignOut()
        .then(navigate("/log-in"))
        .catch(error => console.error(error))
    }, 1000)
  }

  return (
    <Button
      inverted
      color="red"
      className={loading ? "loading": ""}
      onClick={toggleSignOut}
      style={{float: "right"}}
    >
        Sign Out
    </Button>
  )
}

export default SignOutButton
