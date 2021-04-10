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
import { FaBrain, FaDirections, FaRoute } from 'react-icons/fa';
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

import Malav from '@/assets/Malav.jpeg'
import Qiao from '@/assets/Qiao.jpg'
import Prathamesh from '@/assets/Prathamesh.jpg'
import Chenxu from '@/assets/Chenxu.jpg'

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
            <div style={{ padding: 40 }}>
                <h2 className={styles.aboutUsTitle}>About Us</h2>
                <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                        <h2 style={{ textAlign: 'left', lineHeight: '40px', fontSize: '32px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>We promote IT for Social Good</h2>
                        <p style={{ textAlign: 'left' }}>
                            We are a team of four post-graduate students of Information Technology from India and China. We have a unique name for our team 'ISNotNull' which signifies the collaboration of Indians and Chinese developing something valuable for society. <br />
                        Our vision is to make people aware of the importance of active travel. These are our small efforts to give back to society through Information Technology.
</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                        <img src={img6} style={{ width: '100%' }} ></img>
                    </Col>
                </Row>


                <div className={styles.aboutUsMiddleSection}>
                    <div className={styles.aboutUsMiddleSectionContent}>
                        <h2 className={styles.aboutUsMiddleSectionTitle}>Trust Us, We Motivate You.</h2>
                        <p className={styles.aboutUsMiddleSectionContentP}>
                        It is important for everyone to incorporate some physical activity every day.<br/>
                        It can be a 2 km walk or a 5 km bicycle ride. With people less likely to use <br/>
                        public transport as part of their daily commute during the pandemic,<br/> 
                        there are some simple and easy ways to travel while also being physically active. </p>
                    </div>
                </div>


                <Row type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }} gutter={[10, 10]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
                        <h2 className={styles.aboutUsPicTitle}>Meet our Team</h2>
                    </Col>


                </Row>



                <Row gutter={[10, 10]} type={"flex"} justify={'center'} style={{ maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 40 }}>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} >
                        <Card
                            hoverable
                            style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}
                            cover={
                                <img alt="Malav" src={Malav} style={{ maxHeight: '300px' }} />}
                        >
                            <h3 className={styles.vectorTitle}>Malav</h3>
                            <Meta description="Business Analyst" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} >
                        <Card
                            hoverable
                            style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}
                            cover={
                                <img alt="Prathamesh" src={Prathamesh} style={{ maxHeight: '300px' }} />}
                        >
                            <h3 className={styles.vectorTitle}>Prathamesh</h3>
                            <Meta description="Data Scientist" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} >
                        <Card
                            hoverable
                            style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}
                            cover={<img alt="Chenxu" src={Chenxu} style={{ maxHeight: '300px' }} />}
                        >
                            <h3 className={styles.vectorTitle}>Chenxu</h3>
                            <Meta description="Data Scientist" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} >
                        <Card
                            hoverable
                            style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}
                            cover={<img alt="Qiao" src={Qiao} style={{ maxHeight: '300px' }} />}
                        >
                            <h3 className={styles.vectorTitle}>Qiao</h3>
                            <Meta description="Lead Developer" />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}


