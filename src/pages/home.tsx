import React from 'react';
import styles from './index.css';
import { Descriptions, Button, Slider, Form, InputNumber, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip, } from 'antd';
import { connect } from 'dva';
import { Autocomplete, Marker, LoadScript, useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import { AimOutlined, CaretDownOutlined, RedoOutlined, PlusCircleOutlined, CloseOutlined, PlusOutlined, EnvironmentOutlined, RocketOutlined } from '@ant-design/icons'
import MyComponent from '@/pages/googleMap';
import ReactECharts from 'echarts-for-react';
import Geocode from "react-geocode";
import show_img_1 from '@/assets/show_img_1.png'
import show_img_2 from '@/assets/show_img_2.png'
import show_img_3 from '@/assets/show_img_3.png'
import show_img_4 from '@/assets/show_img_4.png'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'
import img4 from '@/assets/img4.png'
import img5 from '@/assets/img5.png'

import discover from '@/assets/discover.jpg'
import save from '@/assets/save.jpg'
import what from '@/assets/what.jpg'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { formatCountdown } from 'antd/lib/statistic/utils';

const FormItem = Form.Item

@connect(({ map }) => ({
  map
}))
@Form.create()
export default class Home extends React.Component {

  state = {

  }

  componentDidMount() {
    const winWidth = document.body.clientWidth || document.documentElement.clientWidth;
    console.log(winWidth)
    this.setState({
      browserWidth: winWidth
    }, () => {
      window.addEventListener('resize', this.handleResize.bind(this))
    })

  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.handleResize.bind(this))

  }

  handleResize = e => {
    console.log(e)
    // if (e.target.innerWidth < 1600) {
    //  console.log(e.target.innerWidth)

    // } else {
    //   console.log(e.target.innerWidth)
    // }
    this.setState({
      browserWidth: e.target.innerWidth
    }, () => {
      console.log(e.target.innerWidth)
    })
  }

  carouselChange(from, to) {
  }
  render() {
    const { browserWidth } = this.state

    const contentStyle = {
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
    };



    return (
      <div  >

        <Carousel beforeChange={this.carouselChange} style={{ height: browserWidth * 1 / 2 }}>
          <div >
            {/* <h3 style={contentStyle}>New to Melbourne?</h3> */}
            {/* 
           <h2>

              Explore your surroundings with us. <br />
Walk or cycle to places near you quicker.<br />
Do multiple things on the go.
                  </h2>   */}

            <img src={discover} style={contentStyle} ></img>
          </div>
          <div >
            {/* <h3 style={contentStyle}>Travel smarter!</h3> */}
            {/* <h2 >
              Optimize your travel with us. <br />
Do more in less time.<br />
Discover how much time you saved by travelling with us.

                  </h2>  */}

            <img src={save} style={contentStyle} ></img>

          </div>
          <div >
            {/* <h3 style={contentStyle}>Travel smarter!</h3> */}
            {/* <h2 >
              Optimize your travel with us. <br />
Do more in less time.<br />
Discover how much time you saved by travelling with us.

                  </h2>  */}

            <img src={what} style={contentStyle} ></img>

          </div>

          {/* <div className={styles.show_img_container}>
                <div style={imgTitleStyle}> Feeling unsafe in dark?</div>
                <div style={imgContentStyle}>
                  We will help you get to a place where you feel safe.<br />
Find a well-lighted route near you using our website.<br />
Check out the number of people near you.
            </div>
                <img src={img3} style={contentStyle} ></img>
              </div> */}
        </Carousel>

        <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Col xs={24} sm={24} md={24} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
            <img src={img4} style={{ width: '100%' }} ></img>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={16} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
            <h2 style={{ textAlign: 'left', lineHeight: '40px', fontSize: '32px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>We are Passionate about Laundry</h2>
            <p style={{ textAlign: 'left' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia dicta magni ea at, culpa atque, rerum dolorum voluptas alias qui temporibus ex totam distinctio nobis impedit minus! Voluptatibus ullam rerum, nihil blanditiis quos atque iusto!
</p>
          </Col>
        </Row>
        <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
            <h2 style={{ textAlign: 'Center', lineHeight: '55px', fontSize: '46px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>What We Can Offer!</h2>
          </Col>

        </Row>


      </div>
    );
  }
}


