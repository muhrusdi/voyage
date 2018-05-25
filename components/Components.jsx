import React from 'react'
import { css } from 'emotion'

export const Heading = ({text}) => (
  <div className={css`
    h2 {
      position: relative;
      &:after {
        position: absolute;
        left: 0;
        bottom: -13px;
        height: 4px;
        width: 40px;
        background: orange;
        content: '';
      }
    }
  `}>
    <h2>{text}</h2>
  </div>
)