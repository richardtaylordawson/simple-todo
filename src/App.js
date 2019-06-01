import React, { useState, useEffect, useContext, Fragment } from "react"
import { Router, navigate } from "@reach/router"

import FirebaseContext from "./firebase/Context"

import GlobalTheme from "./theme/Global"
import Home from "./pages/Home"
import ToDo from "./pages/ToDo"

const App = () => {
  const [authUser, setAuthUser] = useState(null)
  const Firebase = useContext(FirebaseContext)

  useEffect(() => {
    Firebase.auth.onAuthStateChanged(userChange => {
      userChange
        ? setAuthUser(userChange)
        : setAuthUser(null)
    })
  })

  authUser !== null
    ? navigate("/todo")
    : navigate("/")

  return (
    <Fragment>
      <GlobalTheme />
      <Router>
        <Home path={process.env.PUBLIC_URL + '/'} />
        <ToDo path={process.env.PUBLIC_URL + '/todo'} />
      </Router>
    </Fragment>
  )
}

export default App
