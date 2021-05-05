import React from 'react';
import styles from './index.css';
import { Descriptions, Button, Slider, Form, InputNumber, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip, Tabs } from 'antd';
import { connect } from 'dva';
import { Autocomplete, Marker, LoadScript, useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import { AimOutlined, CaretDownOutlined, RedoOutlined, PlusCircleOutlined, CloseOutlined, PlusOutlined, EnvironmentOutlined, RocketOutlined } from '@ant-design/icons'
import MyComponent from '@/pages/googleMap';
import ReactECharts from 'echarts-for-react';
import Geocode from "react-geocode";
import BenefitsBanner from '@/assets/benefitsBanner.jpg'
import noun1 from '@/assets/noun1.png'
import noun2 from '@/assets/noun2.png'
import noun3 from '@/assets/noun3.png'
import noun4 from '@/assets/noun4.png'
import aus from '@/assets/aus.png'
import health_img1 from '@/assets/health_img1.png'
import health_img2 from '@/assets/health_img2.png'
import health_img3 from '@/assets/health_img3.png'
import health_img4 from '@/assets/health_img4.png'
import health_img5 from '@/assets/health_img5.png'
import health_img6 from '@/assets/health_img6.png'
import health_img7 from '@/assets/health_img7.png'
import dataViz1 from '@/assets/dataViz1.png'
import show_img_1 from '@/assets/show_img_1.png'
import show_img_2 from '@/assets/show_img_2.png'
import show_img_3 from '@/assets/show_img_3.png'
import show_img_4 from '@/assets/show_img_4.png'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'
import img4 from '@/assets/img4.png'
import img5 from '@/assets/img5.png'
import safetyGuide from '@/assets/Bike safety guide.png'
import safetyGuide1 from '@/assets/Pedestrian.png'
import ECO from '@/assets/ECO1.png'
import ECO1 from '@/assets/ecoPic2.png'
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
import social1 from '@/assets/social1.png'
import social2 from '@/assets/social2.png'
import social3 from '@/assets/social3.png'
import social4 from '@/assets/social4.png'
import educate from '@/assets/educate.png'
import guide from '@/assets/guide.png'
import optimize from '@/assets/optimize.png'
import ecoTable from '@/assets/ecoTable.png'
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
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Active travel results in

                </h2>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={20}>
                            <Row  gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img1} style={{ width: '80%' }} ></img><h3>Weight loss</h3></Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img2} style={{ width: '80%' }} ></img><h3>Lesser heart disease risk</h3></Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img3} style={{ width: '80%' }} ></img><h3>Lesser pain 
    in joints</h3></Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img4} style={{ width: '80%' }} ></img><h3>Improved muscle
         strength</h3></Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img5} style={{ width: '80%' }} ></img><h3>Improved mental
          health</h3></Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img6} style={{ width: '80%' }} ></img><h3>Higher energy
         levels</h3></Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={health_img7} style={{ width: '80%' }} ></img><h3>Lower stress
       levels</h3></Col>
                            </Row>
                          
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                            <p className={styles.detailText} style={{ textAlign: 'left' }}>
                                World Health Organization (WHO) recommends 80 minutes of walking 35 minutes of cycling for men while women should walk for at least 65 minutes or cycle for 30 minutes a day. Undertaking <b style={{color:'#db545a'}}>ACTIVE TRAVEL</b> will not only ensure you finish your quota of recommended exercise but also keep you healthy. No physical activity can result in chronic diseases which can be life threatning.
<br></br>
                                <br></br>
Physical inactivity can result in various diseases like bowel, uterine and breast cancer alongside heart disease, diabetes, stroke, dementia. Over the years, many lives have been lost due to this and many years have been lost to disability (YLD) which could have been a healthy life.
</p>
                        </Col>




                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                            Physical inactivity results in
                </h2>
                            <div style={{ padding: '0', textAlign: 'center' }}>
                                <DWChart title="Chart" src="https://datawrapper.dwcdn.net/Qo8qW/2/"></DWChart>
                            </div>
                          
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                            <p className={styles.detailText} style={{ textAlign: 'center' }}>
                            <b style={{color:'#db545a'}}>ACTIVE TRAVEL</b>  can help you remain healthy and protect you from these chronic diseases. Adopt active travel today.
</p>
                        </Col>
                        <Col span={24}></Col>
                   
                      
                    </Row>

                </>

                break;
            case 'Society':

                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Less road congestion
                </h2>
                            <p className={styles.detailText}>
                                Traffic conditions are deteriorating in Melbourne quicker than any other Australian city. Choosing active travel can reduce road congestion, resulting in lower costs to remaining road users.</p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={social1} style={{ width: '80%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={0} sm={0} md={12} lg={12} xl={6} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={social2} style={{ width: '80%' }} ></img>

                        </Col>
                        <Col xs={0} sm={0} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'right' }}>
                                Feeling Safe
                </h2>
                            <p className={styles.detailText} style={{ textAlign: 'right' }}>
                                Active travel helps the localities become safe. More number of pedestrians on road, makes a safer environment for everyone. The increased feeling of safe makes the neighbourhoods more liveable.
                    </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'left' }}>
                                Feeling Safe
                </h2>
                            <p className={styles.detailText}>
                                Active travel helps the localities become safe. More number of pedestrians on road, makes a safer environment for everyone. The increased feeling of safe makes the neighbourhoods more liveable.
                    </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={social2} style={{ width: '80%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'left' }}>
                                Make social connections
                </h2>
                            <p className={styles.detailText}>
                                Helps combat social isolations by creating active and walkable neighbourhoods. Better walking conditions and opportunities increase the numbers of people using the street and in turn strengthen the potential for casual social contact.
                    </p>



                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={social3} style={{ width: '80%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={0} sm={0} md={12} lg={12} xl={6} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={social4} style={{ width: '80%' }} ></img>

                        </Col>
                        <Col xs={0} sm={0} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'right' }}>
                                Improved well-being
                </h2>
                            <p className={styles.detailText} style={{ textAlign: 'right' }}>
                                Increased social benefits due to active travel result in wellbeing. Helps build trust, sympathy, respect, understanding, loyalty, and cooperation through direct contact.
                    </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'left' }}>
                                Improved well-being
                </h2>
                            <p className={styles.detailText}>
                                Increased social benefits due to active travel result in wellbeing. Helps build trust, sympathy, respect, understanding, loyalty, and cooperation through direct contact.
                    </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={social4} style={{ width: '80%' }} ></img>

                        </Col>
                    </Row>
                </>
                break
            case 'Road Safety':
                dom = <Row type={'flex'} justify={'center'} >
                    <Col xs={24} sm={24} md={24} lg={18} xl={18} >
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40}}>
                                <h2 className={styles.roadSafetyFirstTitle}>
                                    Pedestrian Safety Guide
                        </h2>
                                <img src={safetyGuide1} style={{ width: '100%' }}></img>
                            </Col>


                        </Row>
                        <Row type={'flex'} justify={'center'} gutter={[20, 20]} style={{ padding: 20 }}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingTop: 40 }}>
                                <h2 className={styles.roadSafetyFirstTitle}>
                                    Cycling Safety Guide
                        </h2>
                                <img src={safetyGuide} style={{ width: '100%' }}></img>
                            </Col>
                            <img></img>






                        </Row>
                    </Col>

                </Row>
                break

            case 'Environment':
                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Australia's transport emissions
                </h2>
                            <div style={{ textAlign: 'center' }}>
                                <img src={aus} style={{ width: '80%' }} ></img>
                            </div>


                            <p style={{ textAlign: 'center' }}>
                                Australia has one of the highest per capita emissions of greenhouse gas in the world, with its 0.33% of the world's population releasing 1.07% of the world's greenhouse gases, contributing to global climate change. And the major criminal is cars. Cars contribute to around 60% of greenhouse gas emissions. And, if this goes on by 2030, Australia will be the most carbon intensive economy of any major developed country.
   <br />

                            </p>

                        </Col>

                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                How do we avoid this?
                </h2>
                            <div style={{ padding: '0', textAlign: 'center' }}>
                                <DWChart title="Chart" src="https://datawrapper.dwcdn.net/ee39E/4/"></DWChart>
                            </div>
                            <p style={{ textAlign: 'center' }}>
                                Answer to this question is adopting active travel. Promoting active travel can result in reduced emissions of the deadly greenhouse gases making the world a better place to live in. Active travel modes like walking and cycling will ensure that you do not harm the environment as there will be no emissions.
   <br />

                            </p>

                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                This would result in ...
                </h2>
                        </Col>
                        <Col span={24}></Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={noun1} style={{ width: '80%' }} ></img><h3>Reduced carbon footprint</h3></Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={noun4} style={{ width: '80%' }} ></img><h3>Lower pollution levels</h3></Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={noun3} style={{ width: '80%' }} ></img><h3>Reduced ozone depletion</h3></Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={5}><img src={noun2} style={{ width: '80%' }} ></img><h3>Improves environment</h3></Col>

                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                        <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                            Choice is yours, what do you want to do?
                </h2>


                        <p style={{ textAlign: 'center' }}>
                            Spend a large chunk of your income on a car or save that money by adopting active travel.
   <br />

                        </p>

                    </Col> */}
                    </Row>

                </>
                break;

            case 'Economic':

                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Weekly Cost of commute modes
                    </h2>
                            <div style={{ textAlign: 'center' }}>

                                <img src={ecoTable} style={{ width: '80%' }} ></img>
                            </div>


                            <p style={{ textAlign: 'center' }}>
                                Using a car in Melbourne is not cheap. There are multiple costs that are levied upon while buying a car. Not only buying a car, but running a car is also expensive. On an average, the cost of using a car in Melbourne comes up to $300 which means a yearly spend of $10,600. The ongoing costs of owning a car can be enough to drive your finances over a cliff if you’re not careful. Answer to solving this issue is again active travel. The cost associated with active travel is a minimal of $20 a week while using a bike and ZERO while walking. It is unimaginable how much money can be saved by a little change in your transportation methods.
       <br />

                            </p>

                        </Col>

                        <Col span={24}></Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Infrastructure costs
                    </h2>
                            <h2 className={styles.detailSecondTitle} style={{ textAlign: 'center' }}>
                                This is the amount of cycle way that can be build in the same cost as these ways.
                                1 km of bus way = 138 km of cycle way

                    </h2>
                            <div style={{ padding: '0', textAlign: 'center' }}>
                                <DWChart title="Chart" src="https://datawrapper.dwcdn.net/C6Z2G/2/"></DWChart>
                            </div>
                            <p style={{ textAlign: 'center' }}>
                                The Australian city planners have spent heavily on improving the transport infrastructure of the nation but still face shortfalls due to increasing traffic congestion, antiquated public transport networks.
                                Around $70 billion was spent on infrastructure in the past eight years. Adopting active travel methods can help in reducing these costs as well. Building a bikeway costs much lower as compared to anything else. If more people adopt active transport, there will be significant economic benefits for the government.
       <br />

                            </p>

                        </Col>




                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={16} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'center' }}>
                                Choice is yours, what do you want to do?
                    </h2>


                            <p style={{ textAlign: 'center' }}>
                                Spend a large chunk of your income on a car or save that money by adopting active travel.
       <br />

                            </p>

                        </Col> */}
                    </Row>

                </>

                break;
            case 'Business':

                dom = <>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Aids in Post Covid recovery
                    </h2>
                            <p className={styles.detailText}>
                                Reports suggest that number of walkers on the road influence store walk ins and retail store sales. Exploring your local area can boost the small retail businesses which is quite necessary for post covid recovery.</p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_1} style={{ width: '100%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={0} sm={0} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_2} style={{ width: '100%' }} ></img>

                        </Col>
                        <Col xs={0} sm={0} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'right' }}>
                                Lesser number of sick leaves
                    </h2>
                            <p className={styles.detailText} style={{ textAlign: 'right' }}>
                                Active travel can have great benefits for an employee’s well-being. Less likely sick leaves. Regular bicycle riders take one less sick day than non-riders saving businesses $61.9 million a year.
                        </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Lesser number of sick leaves
                    </h2>
                            <p className={styles.detailText}>
                                Active travel can have great benefits for an employee’s well-being. Less likely sick leaves. Regular bicycle riders take one less sick day than non-riders saving businesses $61.9 million a year.
                        </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_2} style={{ width: '100%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Increased productivity
                    </h2>
                            <p className={styles.detailText}>
                                A healthier staff is more productive and mentally alert. In fact, research by Mercer highlights that, ‘10.6 days of productive time per employee could be saved by improving the health of an average workforce.
                        </p>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_3} style={{ width: '100%' }} ></img>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]} style={{ padding: 20 }} type={'flex'} justify={'center'}>
                        <Col xs={0} sm={0} md={12} lg={12} xl={8} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_4} style={{ width: '100%' }} ></img>

                        </Col>
                        <Col xs={0} sm={0} md={12} lg={12} xl={12} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle} style={{ textAlign: 'right' }}>
                                Reduced car parking
                    </h2>
                            <p className={styles.detailText} style={{ textAlign: 'right' }}>
                                In the Melbourne City areas, the parking is rare and of high cost. It takes up to $25 per hour to park the car. Using active travel modes, you can cut down on costs of car parking as well.
                        </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }} className={styles.detailContainer}>
                            <h2 className={styles.detailTitle}>
                                Reduced car parking
                    </h2>
                            <p className={styles.detailText}>
                                In the Melbourne City areas, the parking is rare and of high cost. It takes up to $25 per hour to park the car. Using active travel modes, you can cut down on costs of car parking as well.
                        </p>

                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <img src={eco_4} style={{ width: '100%' }} ></img>

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
            <div style={{ padding: 40, display: 'none' }} className={styles.benefitsBanner} >
                <h2 className={styles.benefitsBannerTitle}>Walking or Bicycling Benefits</h2>
                <h2 className={styles.benefitsBannerContent}>Exciting the potential of benefits through simple walking and cycling!</h2>
            </div>
            <Row type={'flex'} justify={'center'} style={{ padding: '20px' }} >
                <Col xs={24} sm={24} md={22} lg={24} xl={24} >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={11} xl={10} style={{ padding: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <span style={{ textAlign: 'left', position: 'relative', top: '50%' }}>
                                    <h2 className={styles.about} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Benefits Of</h2>
                                    <h2 className={styles.us} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Active</h2>
                                    <h2 className={styles.us} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Travel</h2>
                                </span>

                                <p className={styles.aboutUsContent} style={{ textAlign: 'left' }}>
                                    There are multiple benefits of active travel. You will be amazed to find out what changes simple walking and cycling can bring. Not only for you but also for the people around you.
</p>
                            </div>

                        </Col>
                        <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
                        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                            <div style={{ width: '100%', height: browserWidth > 1000 ? browserWidth * 1 / 2.5 : browserWidth, overflow: 'hidden' }}>
                                <img src={BenefitsBanner} style={{ width: '100%' }} ></img>
                            </div>

                        </Col>
                        <Col xs={0} sm={0} md={0} lg={1} xl={2} style={{ backgroundColor: '#db545a', height: browserWidth > 1000 ? browserWidth * 1 / 2.5 : browserWidth }}>
                        </Col>
                    </Row>
                </Col>

            </Row><div style={{ padding: '20px' }}>

                <div className={styles.tabsStyle} id='tabs' >
                    <label className={this.state.currentTab === 'Health' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Health') }}>
                        <div style={{ position: 'relative', top: "25%", fontSize: browserWidth > 800 ? '1rem' : '9px' }}>
                            Health
                   </div>




                    </label>
                    <label className={this.state.currentTab === 'Environment' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Environment') }}>
                        <div style={{ position: 'relative', top: "25%", fontSize: browserWidth > 800 ? '1rem' : '9px' }}>
                            Environment
                   </div>



                    </label>

                    <label className={this.state.currentTab === 'Economic' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Economic') }}>
                        <div style={{ position: 'relative', top: "25%", fontSize: browserWidth > 800 ? '1rem' : '9px' }}>
                            Economic
                   </div>




                    </label>

                    <label className={this.state.currentTab === 'Business' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Business') }}>
                        <div style={{ position: 'relative', top: "25%", fontSize: browserWidth > 800 ? '1rem' : '9px' }}>
                            Business
                   </div>




                    </label>

                    <label className={this.state.currentTab === 'Society' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Society') }}>
                        <div style={{ position: 'relative', top: "25%", fontSize: browserWidth > 800 ? '1rem' : '9px' }}>
                            Society
                   </div>



                    </label>
                    <label className={this.state.currentTab === 'Road Safety' ? styles.tabsLabelStyleClicked : styles.tabsLabelStyle} onClick={() => { this.tabChange('Road Safety') }}>
                        <div style={{ position: 'relative', top: "25%", fontSize: browserWidth > 800 ? '1rem' : '9px' }}>
                            Road Safety
                   </div>



                    </label>
                </div>
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


