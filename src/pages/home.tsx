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
import { FaBrain,FaDirections,FaRoute } from 'react-icons/fa';
import { IconContext } from "react-icons";
import discover from '@/assets/discover.jpg'
import save from '@/assets/save.jpg'
import what from '@/assets/what.jpg'
import img6 from '@/assets/banner_desktop.jpg'
import educate from '@/assets/educate.png'
import guide from '@/assets/guide.png'
import optimize from '@/assets/optimize.png'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { formatCountdown } from 'antd/lib/statistic/utils';

const FormItem = Form.Item
const { Meta } = Card;
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
          <Col xs={24} sm={24} md={24} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
            <img src={img5} style={{ width: '100%' }} ></img>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
            <h2 className={styles.aboutUsSecondTitle}>Melbourne is inactive!</h2>
            <p style={{ textAlign: 'left' }}>
            Over the years, Australian city planners have made efforts to extend pedestrian and cycling paths, restrict car traffic but have their efforts paid off? The answer is NO. If we go by the numbers, in 2001 the number of people using active travel was 3.6% while in 2011 it was 5% and in 2021 it stands at 5.1%. This means only a change of 1.4% which certainly is not good enough. Moreover, concerns are that Melbourne’s young age group is becoming inactive which increases health risk. Young adults are advised to at least have some active travel every day of the week. It is important to promote active travel amongst people and certainly amongst the future of Australia.
</p>
          </Col>
        </Row>
        <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }} gutter={[10, 10]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
            <h2 style={{ textAlign: 'Center', lineHeight: '55px', fontSize: '46px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>What We Offer</h2>
          </Col>


        </Row>

        <Row gutter={[10,10]} type={"flex"} justify={'center'}  style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto',marginBottom:40 }}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} >
            <Card 
              hoverable
              style={{  marginLeft: 'auto', marginRight: 'auto' ,width:'80%'}}
              cover={
                <IconContext.Provider value={{ color: "#99cc00", className: "global-class-name",size:'30%',style:{padding:20} }}>
                  <div>
                    <FaRoute />
                  </div>
                </IconContext.Provider>}
            >
              <h3 className={styles.vectorTitle}>Optimize</h3>
              <Meta  description="We provide you shortest routes to manage all your travel in one go." />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card
              hoverable
              style={{  marginLeft: 'auto', marginRight: 'auto',width:'80%' }}
              cover={<IconContext.Provider value={{ color: "#6600cc", className: "global-class-name",size:'30%',style:{padding:20} }}>
              <div>
                <FaDirections />
              </div>
            </IconContext.Provider>}
            >
               <h3 className={styles.vectorTitle}>Guide</h3>
              <Meta description="We provide you all the reasons for choosing and adopting active travel." />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card
              hoverable
              style={{  marginLeft: 'auto', marginRight: 'auto',width:'80%' }}
              cover={<IconContext.Provider value={{ color: "#0066cc", className: "global-class-name",size:'30%',style:{padding:20} }}>
              <div>
                <FaBrain />
              </div>
            </IconContext.Provider>}
            >
               <h3 className={styles.vectorTitle}>Educate</h3>
              <Meta description="We educate you about all the benefits associated with active travel." />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


