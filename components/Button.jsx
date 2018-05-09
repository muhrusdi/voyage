import React from 'react'
import { css } from 'emotion'

export default ({children}) => (
  <button className={css`
    padding: 10px 20px;
    border-radius: 4px;
  `}>{children}</button>
)