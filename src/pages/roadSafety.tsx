import React from 'react';
import styles from './index.css';
import { Descriptions, Button, Slider, Form, InputNumber, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip, Collapse, Modal, } from 'antd';
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
import trails from '@/assets/trails.jpg'
import parks from '@/assets/parks.jpg'
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
import safetyGuide from '@/assets/Bike safety guide.png'
import safetyGuide1 from '@/assets/Pedestrian.png'
import TableauReport from 'tableau-react';
const FormItem = Form.Item
const { Meta } = Card;
@connect(({ map }) => ({
    map
}))
@Form.create()
export default class RoadSafety extends React.Component {

    state = {

    }


    componentDidMount() {
        const winWidth = document.body.clientWidth || document.documentElement.clientWidth;

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
            <div >

                <Row type={"flex"} justify={'center'} style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
                        <span style={{ textAlign: 'center' }}>
                            <h2 className={styles.poiTitle} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Road safety guidance</h2>

                        </span>

                        <p className={styles.poiContent} style={{ textAlign: 'center' }}>
                            More young people aged between 18-24 die from road crashes. In the last 10 years, more than 400 pedestrians lost their lives on Victorian roads. Around 500 cyclists were seriously injured due to crashes and around 20 lost their lives in 2017-18. Road crashes are a serious threat and it is important to know what safety measures can be undertaken before starting your active travel. So that you stay safe on the roads.
</p>
                    </Col>
                    <Col span={24}>
                    <Row type={'flex'} justify={'center'} >
                    <Col xs={24} sm={24} md={24} lg={18} xl={18} >
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40 }}>
                                <h2 className={styles.roadSafetyFirstTitle}  style={{marginBottom:30}}>
                                    Pedestrian Safety Guide
                        </h2>
                                <img src={safetyGuide1} style={{ width: '100%' }}></img>
                            </Col>
                        </Row>
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40 }}>
                                <h2 className={styles.roadSafetyFirstTitle} style={{marginBottom:30}}>
                                    Cycling Safety Guide
                        </h2 >
                                <img src={safetyGuide} style={{ width: '100%' }}></img>
                            </Col>
                            <img></img>






                        </Row>
                    </Col>
                    <Col span={24} style={{ padding: 40 }}>
                        <span style={{ textAlign: 'center' }}>
                            <h2 className={styles.poiSecondTitle} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Accident Prone Suburbs of Melbourne</h2>

                        </span>
                        <span>
                        <p style={{ textAlign: 'center', color: '#111111', width: '100%' }}>Check the safety of the suburbs near Melbourne CBD before undertaking your active travel</p>
                        </span>
                    </Col>
                    <Col span={24} style={{ marginBottom: 30 }}>
                         <TableauReport
                                options={
                                    {
                                        height: 800,
                                        width: '100%',
                                        hideTabs: true,
                                        // All other vizCreate options are supported here, too
                                        // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                    }
                                }
                                query="?:language=en-GB&:display_count=y&publish=yes&:origin=viz_share_link"
                                url="https://public.tableau.com/views/ACCIDENT_PRONE_SUBURBS_MELBOURNE/Dashboard1"
                            />
                    </Col>
                </Row>
                        
                    </Col>
               
                </Row>

            </div>
        );
    }
}


