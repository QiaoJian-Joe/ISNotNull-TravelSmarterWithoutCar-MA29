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
@connect(({ map }) => ({
  map
}))
@Form.create()
export default class Home extends React.Component {

  state = {

  }

  componentDidMount() {
    const winWidth =  document.documentElement.clientWidth;
    const winHeight = document.documentElement.clientHeight;
    console.log(winWidth)
    this.setState({
      browserWidth: winWidth,
      browserHeight : winHeight
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
      browserWidth:  document.documentElement.clientWidth,
      browserHeight: document.documentElement.clientHeight
    }, () => {
      console.log(e.target.innerWidth)
    })
  }

  carouselChange(from, to) {
  }
  render() {
    const { browserWidth,browserHeight } = this.state

    let contentStyle = {
      position:'relative',
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
      zIndex:0
    };

    let imgStyle = {
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
      zIndex:0
    }

    let titleStyle1={
      position:'absolute',
      textAlign:'center',
      top:10,
      left:browserWidth,
      width:browserWidth,
      padding:browserWidth/20,
      zIndex:2,
      fontSize:browserWidth/20,
      color:'white',
      fontFamily:'Roboto, sans-serif',
      fontWeight:'100',
      
    }

    let titleStyle2={
      position:'absolute',
      textAlign:'center',
      top:10,
      left:browserWidth*2,
      width:browserWidth,
      padding:browserWidth/20,
      zIndex:2,
      fontSize:browserWidth/20,
      color:'white',
      fontFamily:'Roboto, sans-serif',
      fontWeight:'100',
      
    }

    let titleStyle3={
      position:'absolute',
      textAlign:'center',
      top:10,
      left:browserWidth*3,
      width:browserWidth,
      padding:browserWidth/20,
      zIndex:2,
      fontSize:browserWidth/20,
      color:'white',
      fontFamily:'Roboto, sans-serif',
      fontWeight:'100',
      
    }

    let textStyle1 = {
      position:'absolute',
      textAlign:'center',
      top:5+browserWidth/20+10,
      left:browserWidth,
      width:browserWidth,
      padding:browserWidth/20,
      zIndex:1,
      fontSize:browserWidth/40,
      color:'white',
      fontFamily:'Roboto, sans-serif',
      fontWeight:'10',
      background:'rgba(0,0,0,0.1)'
    }

    let textStyle2 = {
      position:'absolute',
      textAlign:'center',
      top:5+browserWidth/20+10,
      left:browserWidth*2,
      width:browserWidth,
      padding:browserWidth/20,
      zIndex:1,
      fontSize:browserWidth/40,
      color:'white',
      fontFamily:'Roboto, sans-serif',
      fontWeight:'10',
      background:'rgba(0,0,0,0.1)'
    }

    let textStyle3 = {
      position:'absolute',
      textAlign:'center',
      top:5+browserWidth/20+10,
      left:browserWidth*3,
      width:browserWidth,
      padding:browserWidth/20,
      zIndex:1,
      fontSize:browserWidth/40,
      color:'white',
      fontFamily:'Roboto, sans-serif',
      fontWeight:'10',
      background:'rgba(0,0,0,0.1)'
    }

    return (
      <div  >

        <Carousel autoplay beforeChange={this.carouselChange} style={{ height: browserWidth * 1 / 2 }}>
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>New to Melbourne?</h3> */}
            {/* 
           <h2>

              Explore your surroundings with us. <br />
Walk or cycle to places near you quicker.<br />
Do multiple things on the go.
                  </h2>   */}

            <img src={homepage_photo1} style={imgStyle}></img>
            <span style={titleStyle1}>
            Discover the benefits of active travel!
            </span>
            <span style={textStyle1}>Adopt active travel for a healthier, wealthier, happier future.</span>
          </div>
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>Travel smarter!</h3> */}
            {/* <h2 >
              Optimize your travel with us. <br />
Do more in less time.<br />
Discover how much time you saved by travelling with us.

                  </h2>  */}

            <img src={homepage_photo2} style={imgStyle} ></img>
            <span style={titleStyle2}>
            Save your travel time!
            </span>
            <span style={textStyle2}>Use our optimizer to find the shortest route for all your travels.</span>
          </div>
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>Travel smarter!</h3> */}
            {/* <h2 >
              Optimize your travel with us. <br />
Do more in less time.<br />
Discover how much time you saved by travelling with us.

                  </h2>  */}

            <img src={homepage_photo3} style={imgStyle} ></img>
            <span style={titleStyle3}>
            Find places to go walking and cycling!
            </span>
            <span style={textStyle3}>Get the best cycling and walking trails and much more with us.</span>
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
            <img src={viz} style={{ width: '100%' }} ></img>
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
          <Col xs={24} sm={24} md={24} lg={12} xl={10} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
            <h2 className={styles.aboutUsSecondTitle}>Melbourne Youth is inactive!</h2>
            <p style={{ textAlign: 'left' }}>
            Over the years, Australian city planners have made efforts to extend pedestrian and cycling paths, restrict car traffic but have their efforts paid off? The answer is <b>NO.</b><br></br>
            The physical inactivity prevails over all age groups, but the most worrying thing is that its youth is inactive. In that 10-year period, the physical activity rate only increased by 4.5 % for people aged between 18-24. Young adults are advised to at least have some active travel every day of the week. It is important to promote active travel amongst people and certainly amongst the future of Australia.
<br></br><i><b>It is time, we act fast!</b></i>
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


