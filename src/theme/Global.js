import React from "react"
import { Global, css } from "@emotion/core"

const GlobalTheme = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Maven+Pro");
      @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

      html {
        font-family: "Source Sans Pro", sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        background-color: #f0f0f0;
      }

      .show { display: block; }
      .hidden { display: none; }
    `}
  />
)

export default GlobalTheme
