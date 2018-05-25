import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { findDOMNode } from 'react-dom'
import Container from './Container'
import kapal from '../static/images/kapal.png'
import laut from '../static/images/laut.png'
import laut2 from '../static/images/laut2.png'
import kompas1 from '../static/images/kompas1.png'
import kompas2 from '../static/images/kompas2.png'
import { keyframes, css } from 'react-emotion'

const clamp = (val, min, max) =>
  Math.max(min, Math.min(max, val))

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollRatio: 0,
      topBuffer: 44
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  handleScroll = (ev) => {
    const { topBuffer } = this.state
    const areaHeight = window.innerHeight * 0.5

    const windowHeight = window.innerHeight;
    const boundingBox = findDOMNode(this).getBoundingClientRect()
    
    const distanceToTop = boundingBox.top - topBuffer;
    const pixelsScrolled = areaHeight - distanceToTop;

    let scrollRatio = pixelsScrolled / areaHeight * 76;
    // scrollRatio = clamp(scrollRatio, 0, 1);
    // console.log(scrollRatio)
    if (!this.state.scrollRatio !== scrollRatio) {
      this.setState({ scrollRatio });
    }
  }
  render() {
    const rotate = keyframes`
      0% {
        transform: rotate(-2deg);
      }
      50% {
        
      }
      100% {
        transform: rotate(1deg);
      }
    `
    const lautKf = keyframes`
      0% {
        top: -49px;
      }
      50% {
        top: -52px
      }
      100% {
        top: -50px;
      }
    `
    const lautKf2 = keyframes`
      0% {
        top: -70px;
      }
      50% {
        top: -74px
      }
      100% {
        top: -50px;
      }
    `
    return (
      <div className={css`
        overflow: hidden;
      `}>
        <Container lg>
          <Row type="flex" align="middle" gutter={20}>
            <Col span={13}>
              <h4 className={css`
                font-weight: 300;
                line-height: 1.5;

              `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</h4>
              <a href="#">#greatjouney</a>
            </Col>
            <Col span={11}>
              <div className={css`
              position: relative;
              height: 400px;
              z-index: 56;
              transform: rotate(-2deg);
              animation-name: ${rotate};
              animation-duration: 3s; /* or: Xms */
              animation-iteration-count: 10;
              animation-direction: alternate; /* or: normal */
              animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
              animation-fill-mode: forwards; /* or: backwards, both, none */
              animation-delay: 2s;
              animation-iteration-count: infinite;
              &:after {
                position: absolute;
                background: url('${kapal}') no-repeat;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background-size: contain;
                content: '';
              }
            `}>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={css`
          position: relative;
          top: -70px;
        `}>
          <div className={css`
            position: relative;
            top: 69px;
          `}>
            <div className={css`
              position: relative;
              height: 80px;
              top: -70px;
              z-index: 55;
              animation-name: ${lautKf2};
              animation-duration: 4s; /* or: Xms */
              animation-iteration-count: 10;
              animation-direction: alternate; /* or: normal */
              animation-timing-function: ease; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
              animation-fill-mode: forwards; /* or: backwards, both, none */
              animation-delay: 5s;
              animation-iteration-count: infinite;
              &:after {
                position: absolute;
                background: url('${laut}') repeat-x;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background-size: contain;
                content: '';
              }
            `}>
            </div>
          </div>
          <div>
            <div className={css`
              position: relative;
              height: 90px;
              z-index: 57;
              top: -49px;
              animation-name: ${lautKf};
              animation-duration: 3s; /* or: Xms */
              animation-iteration-count: 10;
              animation-direction: alternate; /* or: normal */
              animation-timing-function: ease; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
              animation-fill-mode: forwards; /* or: backwards, both, none */
              animation-delay: 2s;
              animation-iteration-count: infinite;
              &:after {
                position: absolute;
                background: url('${laut2}') repeat-x;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background-size: contain;
                content: '';
              }
            `}>
            </div>
          </div>
          <div className={css`
            align-text: center;
          `}>
            <div className={css`
              height: 200px;
              width: 200px;
              position: relative;
              margin: 0 auto;
              &:after {
                position: absolute;
                background: url('${kompas2}') no-repeat center center;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background-size: contain;
                content: '';
              }
              &:before {
                position: absolute;
                background: url('${kompas1}') no-repeat center center;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background-size: contain;
                transition: transform .3s ease;
                content: '';
                transform: rotate(${this.state.scrollRatio}deg) scale(0.64);
              }
            `}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner