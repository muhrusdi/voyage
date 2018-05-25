import React, { Component } from 'react'
import Container from '../components/Container'
import PageItem from '../components/PageItem'
import * as dataAbout from '../static/lottie/aboutus/about-us.json'
import * as dataService from '../static/lottie/service/service.json'
import * as dataWorks from '../static/lottie/works/works.json'
import Banner from '../components/Banner';
import Globalfooter from '../components/Globalfooter';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          text: {
            h1: 'About Us',
            p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, w'
          },
          data: dataAbout
        },
        {
          text: {
            h1: 'Our Services',
            p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, w'
          },
          data: dataService
        },
        {
          text: {
            h1: 'Our Works',
            p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, w'
          },
          data: dataWorks
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Banner/>
        <Container lg>
          {
            this.state.items.map((item, i) => {
              const flip = i % 2 === 0 ? true : false
              return (
                <PageItem key={i} flip={flip} data={item}/>
              )
            })
          }
        </Container>
        <Globalfooter/>
      </div>
    )
  }
}

export default Index