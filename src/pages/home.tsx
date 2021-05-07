import React from 'react';
import styles from './index.css';
import { Descriptions, Button, Slider, Form, InputNumber, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip, Modal, Anchor } from 'antd';
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
import homePageInfo from '@/assets/homePageInfo.png'

import secondSection from '@/assets/secondSection.jpg'
import { FaBrain, FaDirections, FaRoute } from 'react-icons/fa';
import { IconContext } from "react-icons";
import discover from '@/assets/discover.jpg'
import save from '@/assets/save.jpg'
import what from '@/assets/what.jpg'
import img6 from '@/assets/banner_desktop.jpg'
import educate from '@/assets/educate.png'
import guide from '@/assets/guide.png'
import optimize from '@/assets/optimize.png'
import homepage_photo1 from '@/assets/homepage_photo1.jpg'
import homepage_photo2 from '@/assets/homepage_photo2.jpg'
import homepage_photo3 from '@/assets/homepage_photo3.jpg'
import viz from '@/assets/viz.png'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { formatCountdown } from 'antd/lib/statistic/utils';
import TableauReport from 'tableau-react';
const FormItem = Form.Item
const { Meta } = Card;
const {Link} = Anchor
@connect(({ map }) => ({
  map
}))
@Form.create()
export default class Home extends React.Component {

  state = {

  }

 
  componentDidMount() {
    const winWidth = document.documentElement.clientWidth;
    const winHeight = document.documentElement.clientHeight;

    console.log(winWidth);
    this.setState({
      browserWidth: winWidth,
      browserHeight: winHeight
    }, () => {
      window.addEventListener('resize', this.handleResize.bind(this))
    })

  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.handleResize.bind(this))

  }

  handleClickLearnBtn = (value) => {
    const { changeCurrent } = this.props
    changeCurrent(value)
  }

  handleResize = e => {
    console.log(e)
    // if (e.target.innerWidth < 1600) {
    //  console.log(e.target.innerWidth)

    // } else {
    //   console.log(e.target.innerWidth)
    // }
    this.setState({
      browserWidth: document.documentElement.clientWidth,
      browserHeight: document.documentElement.clientHeight
    }, () => {
      console.log(e.target.innerWidth)
    })
  }

  carouselChange(from, to) {
  }
  render() {
    const { browserWidth, browserHeight } = this.state

    let contentStyle = {
      position: 'relative',
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
      zIndex: 0
    };

    let imgStyle = {
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
      zIndex: 0
    }

    let titleStyle1 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let titleStyle2 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth * 2,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let titleStyle3 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth * 3,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let textStyle1 = {
      position: 'absolute',
      textAlign: 'center',
      top: 5 + browserWidth / 20 + 10,
      left: browserWidth,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 40,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '10',
      background: 'rgba(0,0,0,0.1)'
    }

    let textStyle2 = {
      position: 'absolute',
      textAlign: 'center',
      top: 5 + browserWidth / 20 + 10,
      left: browserWidth * 2,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 40,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '10',
      background: 'rgba(0,0,0,0.1)'
    }

    let textStyle3 = {
      position: 'absolute',
      textAlign: 'center',
      top: 5 + browserWidth / 20 + 10,
      left: browserWidth * 3,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 40,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '10',
      background: 'rgba(0,0,0,0.1)'
    }

    return (
      <div  >
        <div className={styles.homeBannerContainer}>
          <Row type={'flex'} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={18}>
              <Row type={'flex'} justify={'start'}>
                <Col span={24}>
                  <div className={styles.firstBannerImage} style={{ width: browserWidth > 900 ? browserWidth * 1 / 2.5 : browserWidth / 1.2, height: browserWidth > 900 ? browserWidth * 1 / 2.5 : browserWidth / 1.2 }}>

                  </div>
                </Col>
                <Col span={6}>
                  <div className={styles.secondBannerImage} style={{ width: browserWidth > 900 ? browserWidth * 1 / 6 : browserWidth / 2, height: browserWidth > 900 ? browserWidth * 1 / 6 : browserWidth / 2 }}></div>
                </Col>
                <Col span={18}>
                  <span style={{ textAlign: 'left' }}>
                    <div className={styles.bannerFirstTitle}>Active Travel</div>
                    <div className={styles.bannerSecondTitle}>IS ANY MODE OF TRAVEL THAT RELIES ON HUMAN POWERED MOBILITY</div>
                    <div className={styles.bannerTextContent}>It involves walking, cycling , scooting or other active ways of getting to or from places, fo the whole journey or as a part of the journey.</div>
                  </span>

                </Col>
                <Col span={24}>

                </Col>
                <Col span={24}>

                </Col>
              </Row>
            </Col>

          </Row>
        </div>
        <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>

          <Col xs={10} sm={10} md={14} lg={14} xl={10} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'left' }}>
            <h2 className={styles.aboutUsSecondTitle} style={{ fontSize: browserWidth > 1000 ? browserWidth * 1 / 20 : browserWidth / 20 }}>Melbourne Youth is inactive!</h2>
            <div>
              <span style={{ textAlign: 'left' }}>
                <Button className={styles.redBtn} onClick={() => { this.setState({ visible: true }) }}>Learn More</Button>
              </span>
            </div>


          </Col>
          <Col xs={14} sm={14} md={10} lg={10} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
            <div className={styles.secondSectionImage} style={{ width: browserWidth > 1000 ? browserWidth * 1 / 3 : browserWidth / 1.1, height: browserWidth > 1000 ? browserWidth * 1 / 3 : browserWidth / 1.1 }}></div>
            {/* <TableauReport
                                options={
                                    {

                                        height: 400,
                                        width: '100%',
                                        hideTabs: false,
                                        // All other vizCreate options are supported here, too
                                        // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                    }
                                }
                                query="?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                                url="https://public.tableau.com/views/IE_16183790961690/Dashboard1"
                            /> */}
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={18} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
            <Row type={'flex'} justify={'center'} gutter={[20, 10]}>
              <Col xs={24} sm={24} md={24} lg={12} xl={14}>

                <img src={secondSection} style={{ width: '100%', position: 'relative', top: browserWidth > 1000 ? -browserWidth * 1 / 10 : -browserWidth / 1.5 }}></img>

              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={10} style={{ position: 'relative', top: browserWidth > 1000 ? -browserWidth * 1 / 100 : -browserWidth / 1.5, height: '50px' }}>
                <div style={{ backgroundColor: '#ececec', textAlign: 'left', height: 'fit-content', padding: '20px' }}>
                  <h2 className={styles.secondSectionTitle}><b>We need to act fast</b></h2>
                  <p style={{ textAlign: 'left', color: '#111111', width: '100%' }}>
                    Around 60% of the youth in Melbourne do not undertaken recommended physical activity. Even with all the infrasturcture for walking and cycling in place, Melbourne has not seen a major difference in physical inactivity since the last 10 years.
                  <br />
                    <br />
                    <p style={{ textAlign: 'center' }}>
                      <Button className={styles.learnBtn} href={'#offer'}>LEARN MORE</Button>
                    </p>

                  </p>
                </div>


              </Col>
            </Row>

          </Col>

        </Row>
      <div id='offer'>

      </div>
        <div style={{ backgroundColor: '#ececec', padding: "20px" ,margin:'200px 0 0 0'}} >
          <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#ececec' }} gutter={[10, 10]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
              <div  className={styles.titleOfLastPartOfHomePage} style={{ textAlign: 'Center', lineHeight: '55px', fontSize: '46px', fontFamily: 'Roboto, sans-serif' }}>What We Offer</div>
            </Col>


          </Row>

          <Row gutter={[10, 10]} type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 40 }}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card

                style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: '310px' }}
                cover={<IconContext.Provider value={{ color: "#db545a", className: "global-class-name", size: '100px', style: { padding: 20 } }}>
                  <div>
                    <FaBrain />
                  </div>
                </IconContext.Provider>}
              >
                <h3 className={styles.vectorTitle}>Benefits of Active Travel</h3>
                <Meta className={styles.contentOfProvide} description="We provide you insights about benefits of active travel." />

                <Button className={styles.learnBtnLine} onClick={() => { this.handleClickLearnBtn('benefits') }}><b></b>LEARN</Button>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card

                style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: '310px' }}
                cover={<IconContext.Provider value={{ color: "#db545a", className: "global-class-name", size: '100px', style: { padding: 20 } }}>
                  <div>
                    <FaDirections />
                  </div>
                </IconContext.Provider>}
              >
                <h3 className={styles.vectorTitle}>Guide</h3>

                <Meta className={styles.contentOfProvide} description="We show you places to go for a ride or a walk." />
                <Button className={styles.learnBtnLine} onClick={() => { this.handleClickLearnBtn('benefits') }}><b></b>GUIDE</Button>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} >
              <Card

                style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: '310px' }}

                cover={
                  <IconContext.Provider value={{ color: "#db545a", className: "global-class-name", size: '100px', style: { padding: 20 } }}>
                    <div>
                      <FaRoute />
                    </div>
                  </IconContext.Provider>}
              >
                <h3 className={styles.vectorTitle}>Plan Your Journey</h3>
                <Meta className={styles.contentOfProvide} description="We find the shortest route for you activel travel journey." />
                <Button className={styles.learnBtnLine} onClick={() => { this.handleClickLearnBtn('travel') }}><b></b>PLAN</Button>
              </Card>
            </Col>


          </Row>
        </div>
        <Row type={'flex'} justify={'center'}>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <h2 className={styles.purposeTitle}>OUR PURPOSE</h2>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <p className={styles.purposeContent}>We aim to promote active travel amongst young adults. And guide them towards a healthy, wealthy and better future.</p>
          </Col>
        </Row>
        <Modal visible={this.state.visible} onCancel={() => { this.setState({ visible: false }) }} footer={[]}>
          <img src={homePageInfo} style={{ width: '100%', margin: '30px 0 0 0' }}></img>
        </Modal>
      </div>
    );
  }
}


