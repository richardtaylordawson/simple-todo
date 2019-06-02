import React from "react"
import { Global, css } from "@emotion/core"

import Colors from "./Colors"

const GlobalTheme = () => (
  <Global
    styles={css`
      body {
        background-color: #f7f7f7;
        padding-top: 60px;
      }

      .d-inline { display: inline; }

      .show { display: block; }
      .hidden { display: none; }

      .mb-0 { margin-bottom: 0 !important; }
      .mb-14 { margin-bottom: 14px !important; }
      .mb-45 { margin-bottom: 45px !important; }
      .mt-45 { margin-top: 45px !important; }

      ${Object.keys(Colors).map(key => {
        return `
          .text-${key} { color: ${Colors[key]} !important; }
          .text-${key}::selection { color: ${Colors[key]} !important; }
          .bg-${key} { background-color: ${Colors[key]} !important; }
        `
      })}
    `}
  />
)

export default GlobalTheme
