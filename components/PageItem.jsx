import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { css } from 'emotion'
import Lottie from 'react-lottie'
import { Heading } from './Components'

class PageItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStopped: true, 
      isPaused: true
    }
  }
  render() {
    const flip = !this.props.flip ? 'row-reverse' : ''
    const { data, text } = this.props.data

    const defaultOptions = {
      loop: true,
      autoplay: false,   
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    return (
      <div>
        <Row type="flex" gutter={40} align="middle" className={css`
          flex-direction: ${flip};
        `}>
          <Col span={12}>
            <Lottie options={defaultOptions}
                height={350}
                width={500}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}/>
          </Col>
          <Col span={12}>
            <div>
              <Heading text={text.h1}/>
              <p>{ text.p}</p>
              <Button className={css`
                border-radius: 0;
                padding: 0 30px;
                height: 42px;
                background: #F78723;
                border: none;
                color: #fff;
                &:hover {
                  background: #D46F15;
                  color: #fff;
                }
              `}>{ text.h1 }</Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PageItem