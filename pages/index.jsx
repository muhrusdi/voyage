import React, { Component } from 'react'
import { css } from 'emotion' 
import Button from '../components/Button'

class Index extends Component {
  render() {
    return (
      <div className={css`
        color: red;
      `}>
        <Button>test</Button>
      </div>
    )
  }
}

export default Index