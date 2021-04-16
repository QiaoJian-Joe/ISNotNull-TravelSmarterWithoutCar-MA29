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
import Picture13 from '@/assets/Picture 13.png'
import Picture14 from '@/assets/Picture 14.png'
import Picture15 from '@/assets/Picture 15.png'
import Picture16 from '@/assets/Picture 16.png'
import Picture17 from '@/assets/Picture 17.png'
import Picture18 from '@/assets/Picture 18.png'
import Picture19 from '@/assets/Picture 19.png'
import Picture20 from '@/assets/Picture 20.png'
import Picture21 from '@/assets/Picture 21.png'
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
                    <Row type={'flex'} justify={'center'} gutter={[10, 10]} style={{ padding: 20 }}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={img6} style={{ width: '100%' }} ></img>
                        </Col> */}
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Make active travel a lifestyle choice!
                            </h2>
                            <p>
                                This is how physical inactivity affects you. It can lead to unimaginable diseases and take several years away from you. A daily routine 30 minutes of physical activity can save you from these chronic diseases.

                                World Health Organization (WHO) recommends 80 minutes of walking or 35 minutes of cycling for men while women should walk for at least 65 minutes or cycle for 30 minutes a day. Active travel can help you achieve those daily recommended physical activity targets easily. Make a shift towards a healthier you. This is how active travel helps you:

                                - Good for your joints

                                - Helps in losing weight

                                - Improves muscle strength

                                - Improves mental health

                                - Reduces risk of heart disease

                                - Saves you from depression

                                What is stopping you? Choose active travel, choose a healthier tomorrow.
                            </p>
                            {/* <iframe width="645" height="955" src="https://public.tableau.com/views/healthvis/Dashboard1?:showVizHome=no&:embed=true&:language=en&:display_count=y&:origin=viz_share_link"/> */}
                            <TableauReport
                                options={
                                    {

                                        height: 600,
                                        width: '100%',
                                        hideTabs: false,
                                        // All other vizCreate options are supported here, too
                                        // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                    }
                                }
                                query="?:showVizHome=no&:embed=true&:language=en&:display_count=y&:origin=viz_share_link"
                                url="https://public.tableau.com/views/healthvis/Dashboard1"
                            />
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
                                Traffic conditions are deteriorating in Melbourne quicker than any other Australian city. Choosing active travel can reduce road congestion, resulting in lower costs to remaining road users.
<br></br>
                                <br></br>
Moreover, it helps the localities become safe. More number of pedestrians on road, makes a safer environment for everyone.
<br></br>
                                <br></br>
Increased social benefits due to active travel result in wellbeing. Helps build trust, sympathy, respect, understanding, loyalty, and cooperation through direct contact.
<br></br>
                                <br></br>
Helps combat social isolations by creating active and walkable neighbourhoods. Better walking conditions and opportunities increase the numbers of people using the street and in turn strengthen the potential for casual social contact.
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
                                    Walk safety tips
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
                                    <Col>   <img src={Picture6} style={{ height: 150 }} ></img>
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
                                    <Col>  <img src={Picture7} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Check for turning vehicles
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
                                        <img src={Picture13} style={{ height: 150 }} ></img>
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
                                    Bicycle Safety Tips
                        </h2>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Row>
                                    <Col>     <img src={Picture15} style={{ height: 150 }} ></img>
                                    </Col>
                                    <Col>
                                        <p>
                                            Before changing lanes always scan behind and signal your intentions
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
                                            Always keep left while riding on footpaths
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
                                            Be careful while riding on tram tracks
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
                                            Wear a correctly fitted, Australian standards approved, bicycle helmet.
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

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Do you see this?
                        </h2>
                            <p>
                                By switching to active travel, you will do a lot of good to the world.
                                Emission free travels will make world a better place to live in.
                                Australia’s 21% greenhouse gas emissions come from road transport.
                                Your travel choices do affect the environment.
 Choosing active travel can have multiple benefits:<br />
    -Less pollution <br />
-Better air quality<br />
-Less depletion of ozone layer<br />
-Lesser ultraviolet radiation levels<br />
A little change in travel mode will help you lead a better life in a better world.
 It is time to think about the environment. Save the environment, it will save you.
                        </p>

                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                        <TableauReport
                               options={
                                   {

                                       height: 350,
                                       width: '100%',
                                       hideTabs: false,
                                       // All other vizCreate options are supported here, too
                                       // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                   }
                               }
                               query="?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                               url="https://public.tableau.com/views/CO2emissions_16185543267030/Dashboard1"
                           />

                        </Col>
                    </Row>
                </>

                break;

            case 'Economic':

                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Beneficial for your pockets too!
                    </h2>
                  
                 
                            <p>
                                In Melbourne, an average car takes out almost $300 from you pockets whereas active travel takes almost nothing out. Minimize your travel costs with active travel. Active travel helps you reduce the extra burden of travel costs which can help you save money for may be your dream home or your dream vacation in Paris.

It is not only beneficial for you but the government too. You can save billions of dollars for your government by choosing active travel. Your smart choices can help ease the burden on the government. During these uncertain times of post COVID, a simple change in your travel can help the economy of Australia. Choose active travel for a wealthier tomorrow.
       <br />

Road infrastructure costs - $110 billion<br />

Total medical costs - $187 billion<br />

Climate change costs - $15 billion<br />

Mental health costs - $60 billion<br />

                    </p>
                    </Col> <Col span={24}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                   
                    <TableauReport
                                options={
                                    {

                                        height: 450,
                                        width: '100%',
                                        hideTabs: false,
                                        // All other vizCreate options are supported here, too
                                        // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                    }
                                }
                                query="?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                                url="https://public.tableau.com/views/Weeklycostsofcommute/Dashboard1"
                            />
                          
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                   
               
                            <TableauReport
                              options={
                                  {

                                      height: 450,
                                      width: '100%',
                                      hideTabs: false,
                                      // All other vizCreate options are supported here, too
                                      // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
                                  }
                              }
                              query="?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                              url="https://public.tableau.com/views/Infrastructurecostanalysis/Dashboard1"
                          />
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
                <label className={this.state.currentTab === 'Society' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Society') }}>
                    <Row>
                        Society
                    </Row>
                    <Row>
                        <FaPeopleCarry className={styles.iconDefault} size={'42px'}></FaPeopleCarry>
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
             
            </div>
            {
                this.state.currentTab === 'Environment' ? this.constructContentDOM('Environment') : null
            }
            {
                this.state.currentTab === 'Society' ? this.constructContentDOM('Society') : null
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
        </>

        );
    }
}


