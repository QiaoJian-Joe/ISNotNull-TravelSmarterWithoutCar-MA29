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
export default class POI extends React.Component {

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
        <div >

            <Row type={"flex"} justify={'center'} style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <span style={{ textAlign: 'center' }}>
                        <h2 className={styles.poiTitle} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Points of Interest</h2>

                    </span>

                    <p className={styles.poiContent} style={{ textAlign: 'center' }}>
                        Melbourne is a city of amazing flora and fauna. It has several places where you can go for a walk or bike ride and get rejuvenated. We provide you all the parks and trails you can go to.
                        Go close to nature by escaping from the sight of concrete and take a break from a routine life. Explore mother nature at its best in Melbourne.
</p>
                </Col>
                <Col span={24}>
                    <Row justify={'center'} type={'flex'} style={{ padding: '60px', backgroundColor: '#e0e5e6' }} gutter={[30, 30]}>
                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                            <Card

                                style={{ marginLeft: 'auto', marginRight: 'auto', padding: '30px' }}
                                cover={<img alt="Chenxu" src={Chenxu} style={{ marginTop: '10px' }} />}
                            >
                                <h3 className={styles.poiFirstSectionTitle}>TRAILS</h3>
                                <Meta description="Explore the wonderful walking and cycling trails in and around Melbourne to enjoy your active travel" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                            <Card

                                style={{ marginLeft: 'auto', marginRight: 'auto', padding: '30px' }}
                                cover={<img alt="Chenxu" src={Chenxu} style={{ marginTop: '10px' }} />}
                            >
                                <h3 className={styles.poiFirstSectionTitle}>PARKS</h3>
                                <Meta description="Explore the lush green parks of Melbourne by taking a walk or bike ride with your loved ones and enjoy the recreational activities on offer." />
                            </Card>
                        </Col>

                    </Row>
                </Col>
                <Col span={24}>
                </Col>
            </Row>


        </div>
    );
}
}


