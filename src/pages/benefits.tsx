import React from 'react';
import styles from './index.css';
import { Descriptions, Button, Slider, Form, InputNumber, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip, Tabs } from 'antd';
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
import ECO from '@/assets/ECO.png'
import ECO1 from '@/assets/ECO1.png'
import ENV from '@/assets/ENV.png'
import ENV1 from '@/assets/ENV1.png'
import HEALTH from '@/assets/HEALTH.png'
import society from '@/assets/society.png'
import Picture3 from '@/assets/Picture 3.png'
import Picture4 from '@/assets/Picture 4.png'
import Picture5 from '@/assets/Picture 5.png'
import Picture6 from '@/assets/Picture 6.png'
import Picture7 from '@/assets/Picture 7.png'
import Picture8 from '@/assets/Picture 8.png'
import Picture9 from '@/assets/Picture 9.png'
import Picture10 from '@/assets/Picture 10.png'
import Picture11 from '@/assets/Picture 11.png'
import Picture12 from '@/assets/Picture 12.png'
import Picture13 from '@/assets/Picture 13.png'
import Picture14 from '@/assets/Picture 14.png'
import Picture15 from '@/assets/Picture 15.png'
import Picture16 from '@/assets/Picture 16.png'
import Picture17 from '@/assets/Picture 17.png'
import Picture18 from '@/assets/Picture 18.png'
import Picture19 from '@/assets/Picture 19.png'
import Picture20 from '@/assets/Picture 20.png'
import Picture21 from '@/assets/Picture 21.png'
import Picture22 from '@/assets/Picture 22.png'
import Picture23 from '@/assets/Picture 23.png'
import Picture24 from '@/assets/Picture 24.png'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { FaBrain, FaDirections, FaRoute, FaTree, FaWalking, FaBicycle, FaHeart, FaMoneyBillAlt, FaHandsHelping, FaRoad, FaPeopleCarry } from 'react-icons/fa';
import { IconContext } from "react-icons";
import discover from '@/assets/discover.jpg'
import save from '@/assets/save.jpg'
import what from '@/assets/what.jpg'
import eco_1 from '@/assets/eco_1.png'
import eco_2 from '@/assets/eco_2.png'
import eco_3 from '@/assets/eco_3.png'
import eco_4 from '@/assets/eco_4.png'
import educate from '@/assets/educate.png'
import guide from '@/assets/guide.png'
import optimize from '@/assets/optimize.png'
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import { formatCountdown } from 'antd/lib/statistic/utils';
import TableauReport from 'tableau-react';
import Malav from '@/assets/Malav.jpeg'
import Qiao from '@/assets/Qiao.jpg'
import Prathamesh from '@/assets/Prathamesh.jpg'
import Chenxu from '@/assets/Chenxu.jpg'
import DWChart from 'react-datawrapper-chart'
const FormItem = Form.Item
const { Meta } = Card;
const { TabPane } = Tabs
const SimpleReport =
    <TableauReport
        url="https://public.tableau.com/views/healthvis/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link&:embed=true"
        token="<TRUSTED TICKET HERE>"
    />


@connect(({ map }) => ({
    map
}))
@Form.create()
export default class Benefits extends React.Component {

    state = {
        currentTab: 'Health'
    }


    constructContentDOM = (tag) => {
        let dom
        switch (tag) {
            case 'Health':
                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                How these diseases affect you?
</h2>


                            <p>
                                These disease take away your strength to undertake physical activities and can also be a cause of death. What’s more, no one would want to live with a life with disability, but they can be forced to if they do not undertake recommended physical activity. The line chart on left shows the average number of years people live with a disability based on different diseases and gender.
<br />

                            </p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <TableauReport
                                options={
                                    {

                                        height: 250,
                                        width: '100%',
                                        hideTabs: false,
                                        // All other vizCreate options are supported here, too
                                        // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                    }
                                }
                                query="?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                                url="https://public.tableau.com/views/v1_16191373842950/Dashboard2"
                            />
                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <TableauReport
                                options={
                                    {

                                        height: 250,
                                        width: '100%',
                                        hideTabs: false,
                                        // All other vizCreate options are supported here, too
                                        // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                    }
                                }
                                query="?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                                url="https://public.tableau.com/views/v2_16191376183490/Dashboard3"
                            />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                How these diseases affect you?
</h2>


                            <p>
                                These disease take away your strength to undertake physical activities and can also be a cause of death. What’s more, no one would want to live with a life with disability, but they can be forced to if they do not undertake recommended physical activity. The line chart on left shows the average number of years people live with a disability based on different diseases and gender.
<br />

                            </p>

                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                How can you overcome this?
</h2>


                            <p>
                                You have a new choice! Join the active travel bandwagon! World Health Organization (WHO) recommends 80 minutes of walking 35 minutes of cycling for men while women should walk for at least 65 minutes or cycle for 30 minutes a day. Undertaking active travel will not only ensure you finish your quota of recommended exercise but also stay away from these diseases.
<br />

                            </p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <img src={HEALTH} style={{ width: '100%' }} ></img>
                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                What’s More!
</h2>


                            <p style={{ textAlign: 'center' }}>
                                <h4> &#9702; Weight <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>

                                <h4> &#9702; Muscle strength <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></h4>

                                <h4> &#9702; Mental health <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></h4>
                                <h4> &#9702; Heart disease risk <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>

                                <h4> &#9702; Pain in joints <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>

                                <h4> &#9702; Energy levels <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></h4>
                                <h4> &#9702; Stress levels <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>
                                <h4><br></br>
                                    <i><b>
                                        Active travel has multiple other health benefits!
</b>
                                    </i>

                                </h4>

                            </p>

                        </Col>
                    </Row>
                </>

                break;
            case 'Society':
                dom =
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Helping the society
            </h2>
                            <p>
                                <h3><b>Road Congestion <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></b></h3>
                                Traffic conditions are deteriorating in Melbourne quicker than any other Australian city. Choosing active travel can reduce road congestion, resulting in lower costs to remaining road users.
<br></br>
                                <br></br>
                                <h3><b>Safety <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></b></h3>
                                Active travel helps the localities become safe. More number of pedestrians on road, makes a safer environment for everyone.
<br></br>
                                <br></br>
                                <h3><b>Social connections <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></b></h3>
                                Helps combat social isolations by creating active and walkable neighbourhoods. Better walking conditions and opportunities increase the numbers of people using the street and in turn strengthen the potential for casual social contact.
<br></br>
                                <br></br>
                                <h3><b>Well-being <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></b></h3>
                                Increased social benefits due to active travel result in wellbeing. Helps build trust, sympathy, respect, understanding, loyalty, and cooperation through direct contact.
                </p>

                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <h2 className={styles.societyTitle}>

                            </h2>
                            <img src={society} style={{ width: '100%' }} ></img>

                        </Col>
                    </Row>
                break
            case 'Road Safety':
                dom = <Row type={'flex'} justify={'center'} >
                    <Col xs={24} sm={24} md={24} lg={18} xl={18} >
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                                <h2 className={styles.roadSafetyFirstTitle}>
                                    For pedestrians
                        </h2>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                                <h2 className={styles.roadSafetySecondTitle}>
                                    Before you cross the road
                        </h2>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>    <img src={Picture3} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Look before you cross
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>   <img src={Picture4} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Put away your phones
                                    </p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>  <img src={Picture5} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>

                                            Wait for the cars to pass
                                    </p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>   <img src={Picture22} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Wear bright clothing
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>  <img src={Picture12} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Check for turning vehicles
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>  <img src={Picture23} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Remove earphones
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                        </Row>
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                                <h2 className={styles.roadSafetySecondTitle}>
                                    While crossing the road
                        </h2>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>   <img src={Picture8} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Always use pedestrian crossing
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>    <img src={Picture9} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Cross only when green
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>     <img src={Picture10} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Do not cross if the buzzer starts on level crossings
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>   <img src={Picture11} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Cross to nearest edge Of road while getting Off a tram
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>
                                        <img src={Picture24} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Give way to vehicles at roundabouts
                                    </p>
                                    </Col>
                                </Row>


                            </Col>

                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>
                                        <img src={Picture14} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Obey a no pedestrian sign
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                        </Row>
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                                <h2 className={styles.roadSafetyFirstTitle}>
                                    For Bike Riders
                        </h2>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>     <img src={Picture15} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Look behind while changing lanes and signal intentions.
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>   <img src={Picture16} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Keep left while riding on footpaths
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>    <img src={Picture17} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Look out for drivers and passengers getting in and out of parked cars and be aware of the risk of car doors opening
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>
                                        <img src={Picture18} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Avoid riding on tram tracks
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>   <img src={Picture19} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Wear an Australian standard approved fitted helmet
                                    </p>
                                    </Col>
                                </Row>


                            </Col>

                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>  <img src={Picture20} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Don’t ride on the inside of larger vehicles such as buses and trucks – the drivers can’t see you and these vehicles may be turning which will require more space than a normal passenger car.
                                    </p>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>
                                        <img src={Picture21} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Look out for other road users particularly when they are approaching you from behind or pulling out in front of you.
                                    </p>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>

                </Row>
                break

            case 'Environment':
                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Emission Contribution of transport
</h2>


                            <p>
                                Australia has one of the highest per capita emissions of greenhouse gas in the world, with its 0.33% of the world's population releasing 1.07% of the world's greenhouse gases, contributing to global climate change. And the major criminal is cars. Cars contribute to around 60% of greenhouse gas emissions. And, if this goes on by 2030, Australia will be the most carbon intensive economy of any major developed country.
<br />

                            </p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <img src={ENV} style={{ width: '100%' }} ></img>
                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <img src={ENV1} style={{ width: '100%' }} ></img>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                How do we avoid this?
</h2>


                            <p>
                                Answer to this question is adopting active travel. Promoting active travel can result in reduced emissions of the deadly greenhouse gases making the world a better place to live in. Active travel modes like walking and cycling will ensure that you do not harm the environment as there will be no emissions.
<br />

                            </p>

                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Active travel benefits to environment
</h2>


                            <p style={{ textAlign: 'center' }}>
                                <h4> &#9702; Active travel can result in lower CO2 Emissions <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>
                                <h4> &#9702; This results in lower pollution levels Pollution levels <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>
                                <h4> &#9702; Which in turn reduces the ozone layer depletion <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>
                                <h4> &#9702; This results in reduced UV radiation level <IconContext.Provider value={{ color: "#ff0022", className: "global-class-name", size: '14px' }}>

                                    <BiDownArrow></BiDownArrow>

                                </IconContext.Provider></h4>
                                <h4> &#9702; And all of these makes the environment better <IconContext.Provider value={{ color: "#00ff22", className: "global-class-name", size: '14px' }}>

                                    <BiUpArrow></BiUpArrow>

                                </IconContext.Provider></h4>
                                <br />
                                <h3>A little change in travel mode will help you lead a better life in a better world. It is time to think about the environment.</h3>
                                <h4><br></br>
                                    <i><b>
                                        Save the environment, it will save you.
</b>
                                    </i>

                                </h4>
                            </p>

                        </Col>
                    </Row>
                </>

                break;

            case 'Economic':

                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Transport Infrastructure Expense
                    </h2>


                            <p>
                                The Australian city planners have spent heavily on improving the transport infrastructure of the nation but still face shortfalls due to increasing traffic congestion, antiquated public transport networks.<br />
                            Around $70 billion was spent on infrastructure in the past eight years. Adopting active travel methods can help in reducing these costs as well. Building a bikeway costs much lower as compared to anything else. If more people adopt active transport, there will be significant economic benefits for the government.
       <br />

                            </p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <img src={ECO} style={{ width: '100%' }} ></img>
                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} >
                            <img src={ECO1} style={{ width: '100%' }} ></img>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Individual transport expense
                    </h2>


                            <p>
                                Using a car in Melbourne is not cheap. There are multiple costs that are levied upon while buying a car. Not only buying a car, but running a car is also expensive. On an average, the cost of using a car in Melbourne comes up to $300 which means a yearly spend of $10,600. The ongoing costs of owning a car can be enough to drive your finances over a cliff if you’re not careful. Answer to solving this issue is again active travel. The cost associated with active travel is a minimal of $20 a week while using a bike and ZERO while walking. It is unimaginable how much money can be saved by a little change in your transportation methods.
       <br />

                            </p>

                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Choice is yours, what do you want to do?
                    </h2>


                            <p style={{ textAlign: 'center' }}>
                                Spend a large chunk of your income on a car or save that money by adopting active travel.
       <br />

                            </p>

                        </Col>
                    </Row>

                </>

                break;
            case 'Business':

                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Aids in Post Covid recovery
                    </h2>
                            <p>
                                Reports suggest that number of walkers on the road influence store walk ins and retail store sales. Exploring your local area can boost the small retail businesses which is quite necessary for post covid recovery.</p>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_1} style={{ width: '100%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_2} style={{ width: '100%' }} ></img>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Improved employee health and well-being
                    </h2>
                            <p>
                                Active travel can have great benefits for an employee’s well-being. Less likely sick leaves. Regular bicycle riders take one less sick day than non-riders saving businesses $61.9 million a year.
                        </p>

                        </Col>

                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Increased productivity
                    </h2>
                            <p>
                                A healthier staff is more productive and mentally alert. In fact, research by Mercer highlights that, ‘10.6 days of productive time per employee could be saved by improving the health of an average workforce.
                        </p>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_3} style={{ width: '100%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_4} style={{ width: '100%' }} ></img>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Reduced car parking
                    </h2>
                            <p>
                                In the Melbourne City areas, the parking is rare and of high cost. It takes up to $25 per hour to park the car. Using active travel modes, you can cut down on costs of car parking as well.
                        </p>

                        </Col>

                    </Row>
                </>

                break;
        }
        return dom
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

    tabChange = (name) => {
        this.setState(
            {
                currentTab: name
            }
        )
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



        return (<>
            <div style={{ padding: 40 }} className={styles.benefitsBanner} >
                <h2 className={styles.benefitsBannerTitle}>Walking or Bicycling Benefits</h2>
                <h2 className={styles.benefitsBannerContent}>Exciting the potential of benefits through simple walking and cycling!</h2>
            </div>
            <div className={styles.tabsStyle} id='tabs'>
                <label className={this.state.currentTab === 'Health' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Health') }}>
                    <Row>
                        Health
                    </Row>
                    <Row>
                        <FaHeart className={styles.iconDefault} size={'42px'}></FaHeart>
                    </Row>

                </label>
                <label className={this.state.currentTab === 'Environment' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Environment') }}>
                    <Row>
                        Environment
                    </Row>
                    <Row>
                        <FaTree className={styles.iconDefault} size={'42px'}></FaTree>
                    </Row>
                </label>

                <label className={this.state.currentTab === 'Economic' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Economic') }}>
                    <Row>
                        Economic
                    </Row>
                    <Row>
                        <FaMoneyBillAlt className={styles.iconDefault} size={'42px'}></FaMoneyBillAlt>
                    </Row>

                </label>

                <label className={this.state.currentTab === 'Business' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Business') }}>
                    <Row>
                        Business
                    </Row>
                    <Row>
                        <FaHandsHelping className={styles.iconDefault} size={'42px'}></FaHandsHelping>
                    </Row>

                </label>
                <label className={this.state.currentTab === 'Road Safety' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Road Safety') }}>
                    <Row>
                        Road Safety
                    </Row>
                    <Row>
                        <FaRoad className={styles.iconDefault} size={'42px'}></FaRoad>
                    </Row>
                </label>
                <label className={this.state.currentTab === 'Society' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Society') }}>
                    <Row>
                        Society
                    </Row>
                    <Row>
                        <FaPeopleCarry className={styles.iconDefault} size={'42px'}></FaPeopleCarry>
                    </Row>
                </label>
            </div>
            {
                this.state.currentTab === 'Environment' ? this.constructContentDOM('Environment') : null
            }
            {
                this.state.currentTab === 'Health' ? this.constructContentDOM('Health') : null
            }
            {
                this.state.currentTab === 'Economic' ? this.constructContentDOM('Economic') : null
            }
            {
                this.state.currentTab === 'Business' ? this.constructContentDOM('Business') : null
            }
            {
                this.state.currentTab === 'Road Safety' ? this.constructContentDOM('Road Safety') : null
            }
            {
                this.state.currentTab === 'Society' ? this.constructContentDOM('Society') : null
            }
        </>

        );
    }
}


