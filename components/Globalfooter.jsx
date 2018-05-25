import React, { Component } from 'react'
import Container from './Container'
import Link from 'next/link'
import { css } from 'emotion'
import { Row, Col } from 'antd'
import logo from '../static/images/logo.png'
import logoF from '../static/images/logo-footer.png'

class Globalfooter extends Component {
  render() {
    return (
      <footer className={css`
        background: #F2F6F9;
        margin-top: 60px;
        padding: 50px 0;
        color: #0E518D;
        a {
          color: #0E518D;
        }
        h4 {
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
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}>
        <Container lg>
          <h3>Trust your journay with us!</h3>
          <Row type="flex" gutter={25}>
            <Col span={5}>
              <img src={logoF} alt="" className={css`
                height: 70px;
                margin-top: 70px;
              `}/>
            </Col>
            <Col span={10}>
              <h4>Vayage Design</h4>
              <ul>
                <li>Jl. Hertasning I No. 30 Tidung, Rappocini, Kota Makassar, Sulawesi Selatan 90222</li>
                <li>
                  <ul>
                    <li><h5>General Inquiris</h5></li>
                    <li>e: info@voyagedesign.id</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li><h5>Career Inquiris</h5></li>
                    <li>e: jobs@voyagedesign.id</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li><h5>Phone</h5></li>
                    <li>p: (0411)4678985</li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col span={5}>
              <h4>Other Links</h4>
              <ul>
                <li><a href="#">OUR TEAM</a></li>
                <li><a href="#">CAREER</a></li>
                <li><a href="#">CONTACT US</a></li>
              </ul>
            </Col>
            <Col span={4}>
              <h4>Follow Us</h4>
              <ul className={css`
                display: flex;
                align-items: center;
              `}>
                <li><a href="#">fb</a></li>
                <li><a href="#">ig</a></li>
                <li><a href="#">yt</a></li>
              </ul>
              <small>Voyage Design</small>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Globalfooter