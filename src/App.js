import React, { useState, useEffect, useContext, Fragment } from "react"
import { Router, navigate } from "@reach/router"

import FirebaseContext from "./firebase/Context"
import GlobalTheme from "./theme/Global"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
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

  if(authUser !== null) {
    navigate("/todo")
  }

  return (
    <Fragment>
      <GlobalTheme />
      <Router>
        <SignUp path={process.env.PUBLIC_URL + '/sign-up'} />
        <LogIn default path={process.env.PUBLIC_URL + '/log-in'} />
        <ToDo path={process.env.PUBLIC_URL + '/todo'} />
      </Router>
    </Fragment>
  )
}

export default App
