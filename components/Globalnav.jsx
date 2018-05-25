import React, { Component } from 'react'
import Container from './Container'
import Link from 'next/link'
import { css } from 'emotion'
import { Row, Col } from 'antd'
import logo from '../static/images/logo.png'

class Globalnav extends Component {
  render() {
    return (
      <nav className={css`
        height: 140px;
        background: #fff;
      `}>
        <Container lg>
          <Row type="flex" justify="space-between" align="middle" className={css`
            height: 140px;
          `}>
            <Col>
              <ul className={css`
                display: flex;
                padding: 0;
                margin: 0;
                list-style: none;
                height: 140px;
                align-items: center;
                li {
                  margin: 0;
                  &:not(:first-child) {
                    a {
                      padding: 10px 30px;
                    }
                  }
                }
              `}>
                <li>
                  <Link href="/">
                    <a>
                      <img src={logo} alt=""/>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us"><a>ABOUT US</a></Link>
                </li>
                <li>
                  <Link href="/services"><a>SERVICES</a></Link>
                </li>
                <li>
                  <Link href="/works"><a>WORKS</a></Link>
                </li>
                <li>
                  <Link href="/blog"><a>BLOGS</a></Link>
                </li>
              </ul>
            </Col>
            <Col>
              left
            </Col>
          </Row>
        </Container>
      </nav>
    )
  }
}

export default Globalnav