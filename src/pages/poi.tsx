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
const FormItem = Form.Item
const { Meta } = Card;
@connect(({ map }) => ({
    map
}))
@Form.create()
export default class POI extends React.Component {

    state = {

    }

    staticData = [{ place_id: "1", place_type: "Park", place_desc: "Victoria Gardens are nestled between High and Murray streets in Prahran. Set over two hectares, the gardens are a green oasis away from the hustle and bustle of daily life.", place_address: "High Street, Prahran", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "Yes", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "2", place_type: "Park", place_desc: "Princes Gardens is a popular park for recreation, relaxation and entertainment. The gardens feature a skate park, tennis courts, outdoor basketball full court, playground, shaded areas and ample lawns.", place_address: "Essex Street, Prahran", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "3", place_type: "Park", place_desc: "Minutes from Toorak Road and Chapel Street shopping strips, Rockley Gardens offer ample shade for picnics and a playground for younger visitors.", place_address: "Toorak Road, South Yarra", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "4", place_type: "Park", place_desc: "This park has plenty of expansive lawns, making it ideal for walking, running and playing. It's shady and sheltered avenues provide cool respite on hot summer days.", place_address: "Alexandra Avenue, South Yarra", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "Yes", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "5", place_type: "Park", place_desc: "Lumley Gardens are a favourite spot for locals to socialise, exercise and get some tree time.", place_address: "Jessamine Avenue, Prahran", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "6", place_type: "Park", place_desc: "Located next to the Yarra River and near the historic Como house, Como Park is famous for it's vast, sloping lawns and scenic views. The park features playground, outdoor exercise equipment, bike path and a dog park.", place_address: "Alexandra Avenue, South Yarra", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "7", place_type: "Park", place_desc: "With tall gum trees, plentiful birdlife and large open spaces, this is a beautiful spot for picnics, walking or ball games. A lovely oak-lined boulevard runs through the centre of the park. ", place_address: "Fairview Street, Hawthorn", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "8", place_type: "Park", place_desc: "A large park within walking distance of Hawthorn train station that features lawns and tree-lined paths.", place_address: "Barton Street, Hawthorn", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "9", place_type: "Park", place_desc: "Central Gardens is located in the heart of Hawthorn and is popular with local residents, students and Hawthorn Community House visitors. These gardens have an outstanding collection of majestic, mature trees surrounded by sweeping lawns. Central Gardens is located in the heart of Hawthorn and is popular with local residents, students and Hawthorn Community House visitors. Central Gardens is located in the heart of Hawthorn and is popular with local residents, students and Hawthorn Community House visitors. Central Gardens is located in the heart of Hawthorn and is popular with local residents, students and Hawthorn Community House visitors. Central Gardens is located in the heart of Hawthorn and is popular with local residents, students and Hawthorn Community House visitors. ", place_address: "Williams Street, Hawthorn", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "10", place_type: "Park", place_desc: "Citizens Park is Richmond's largest park and one of the busiest in Yarra. The oval is used for a range of organised sports and as a destination for people to relax, exercise and walk their dogs.", place_address: "Highett Street, Richmond", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "11", place_type: "Park", place_desc: "Barkly Gardens is a large park in the heart of bustling Richmond, perfect spot for family picnics, dog walking and exercise.ÊThe shady trees and green lawns make it a great place to relax. ", place_address: "Mary Street, Cremorne", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "12", place_type: "Park", place_desc: "Burnley Park covers more than 6 hectares, overlooks the Yarra River and is close to Bridge Road and Swan Street.", place_address: "Park Grove, Burnley", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "13", place_type: "Park", place_desc: "A popular execrcise park with a large sportsfield and great local playground with barbecues, picnic tables and toilets. Evening lighting is provided in winter months.", place_address: "Albert Street, Brunswick East", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "Yes", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "14", place_type: "Park", place_desc: "This heritage park with beautiful century old avenue of English Elms has a refurbished playground, garden beds, path extensions, replanting and irrigation works and picnic settings.", place_address: "Leinster Grove, Brunswick East", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "Yes", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "15", place_type: "Park", place_desc: "Lots of cafes and eateries along this stretch. Makes for a pleasant walk, a few street performers to add to the flavour.", place_address: "Batman Avenue, Melbourne", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "16", place_type: "Park", place_desc: "The native gardens, which contain examples of the indigenous flora of the area are a feature of the park. These gardens have been developed and maintained in partnership with Council and the local community planting group.", place_address: "Liardet Street, Port Melbourne", place_open_hrs: "Daylight hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "17", place_type: "Park", place_desc: "It is one of the most visited and widely used parks in the city by residents, nearby office workers and tourists. The gardens are notable for their archaeological, horticultural, historical and social significance to the history of Melbourne. ", place_address: "William Street, West Melbourne", place_open_hrs: "6am-10pm", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "18", place_type: "Park", place_desc: "The Carlton Gardens is a World Heritage Site located on the northeastern edge of the Central Business District in the suburb of Carlton, in Melbourne, Australia. A popular picnic and barbecue area, the heritage-listed Carlton Gardens are home to an array of wildlife, including brushtail possums.", place_address: "Carlton Street, Carlton", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "19", place_type: "Park", place_desc: "The gardens feature avenues of mature trees along the crossing paths, forming a 'cathedral' or 'tunnel' effect. A prominent landscape feature is the contrasting evergreen foliage of conifers, palms, and Moreton Bay Figs against a background of deciduous elms, oaks, and poplars.", place_address: "Lansdowne Street, East Melbourne", place_open_hrs: "Oct-Apr 6:30am-10pm, May-Sep 6:30am-9pm", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "20", place_type: "Park", place_desc: "The landscape is diverse and layered, following a classic Victorian-era design. There are extensive lawns and pathways lined with mature elm trees, plus a framework of garden structures and floral displays.", place_address: "Clarendon Street, East Melbourne", place_open_hrs: "May-Sep 6:30am-9pm, Oct-Apr 6:30am-10pm", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "21", place_type: "Park", place_desc: "The Shrine of Remembrance was constructed between 1927 and 1934 in response to the loss and grief felt by Australians during and after the First World War. Today the Shrine is an important landmark and memorial to those Australians who have served in war and peacekeeping operations.", place_address: "Kings Domain South 44-200 Domain Road MELBOURNE VIC 3004, Melbourne", place_open_hrs: "6am-9pm", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "22", place_type: "Park", place_desc: "This waterfront location is also home to a significantly large wetland area, where youÕll find a range of native trees, shrubs and small plants. Docklands Park also offers free barbeque facilities, as well as range of walking and bike trails.", place_address: "Collins Street, Docklands", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "23", place_type: "Park", place_desc: "Batman Park is an urban park, located on the northern bank of the Yarra River in central Melbourne, Victoria, Australia. Batman Park is a small open grassed space with paths and planted Eucalyptus trees bordered by Spencer Street at the west, Flinders Street Viaduct at the north and King Street to the east. ", place_address: "Spencer Street, Melbourne", place_open_hrs: "6am-12am", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "24", place_type: "Park", place_desc: "J.J. Holland ParkÊis a large multi-use park in theÊMelbourneÊsuburb ofÊKensington", place_address: "Altona Street, Kensington", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "25", place_type: "Park", place_desc: "Named after Melbourne's co-founder, John Pascoe Fawkner, and first reserved in 1862, Fawkner Park remains largely unchanged from its original design. It is popular for walking and exercising.", place_address: "152-154 Toorak Rd West, Melbourne", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "26", place_type: "Park", place_desc: "On the south bank of the Yarra River, the Alexandra Gardens connect to Kings Domain, the Domain Parklands and the Royal Botanic Gardens. The gardensÕ palm trees, ornamental shrubs and tree-lined avenues merge with the Royal Botanic Gardens, and its star-shaped garden bed is designed to represent the Federation of Australia.", place_address: "Alexandra Avenue, Melbourne", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "27", place_type: "Park", place_desc: "Royal Park is Melbourne's largest park covering 170 hectares, and its wide open spaces make it hard to believe you are still in the city.", place_address: "Gatehouse Street, Parkville", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "28", place_type: "Park", place_desc: "The Queen Victoria Gardens are Melbourne's memorial to Queen Victoria. A huge floral clock is positioned opposite the National Gallery of Victoria, containing over 7,000 flowering plants which are changed twice yearly.", place_address: "Linlithgow Avenue Melbourne, Melbourne", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "29", place_type: "Park", place_desc: "Stroll along the banks of the Yarra River in Birrarung Marr Park, a modern park with an ancient history. With its riverside promenade, shady native foliage and architectural terraces, the 20-acre (8-hectare) parkland is a popular place.", place_address: "Princes Walk Melbourne, Melbourne", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "Yes", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "30", place_type: "Park", place_desc: "Enjoy a stroll around one of inner-Melbourne's favourite parks. Beautiful, shady Princes Park has great walking paths, lovely trees, dog-friendly spaces, a pond - something for everyone.", place_address: "Leonard St/Royal Pde, Carlton North", place_open_hrs: "24 hours", place_difficulty: "", place_toilet_avlbl: "Yes", place_accessible: "No", place_water_tap: "No", place_elevation: "0", place_length: "0.00", place_route_type: "", place_complete_time: "0" }, { place_id: "31", place_type: "Trail", place_desc: "Albert Park Lake is a 5.0 kilometer lightly trafficked loop trail located near Melbourne, Victoria, Australia and is good for all skill levels. The trail is primarily used for walking, running, nature trips, and bird watching. Dogs are also able to use this trail but must be kept on leash.", place_address: "", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "46", place_length: "5.00", place_route_type: "Loop", place_complete_time: "81" }, { place_id: "32", place_type: "Trail", place_desc: "Melbourne's iconic The Tan Track, more commonly referred to as 'The Tan', starts alongside the south-side of the Yarra River and makes a lap around the Royal Botanic Gardens and Kings Domain on land of Wurundjeri Traditional Owners. The Tan has hold both a local and international reputation, particularly among runners and walkers of all abilities. ", place_address: "Royal Botanic Gardens", place_open_hrs: "", place_difficulty: "Moderate", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "42", place_length: "3.90", place_route_type: "Loop", place_complete_time: "57" }, { place_id: "33", place_type: "Trail", place_desc: "There is always something interesting, eclectic, or awe-inspiring to see in the art lovers metropolis of Melbourne. It's actually a bit of a misnomer to call this area the art district. Officially the area is Melbourne's Central Business District, but thanks to a generous peppering of outdoor art throughout its streets and narrow lane ways, this central area is much better known for its art and streetscape than its business deals.", place_address: "Melbourne", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "16", place_length: "2.40", place_route_type: "Point to Point", place_complete_time: "38" }, { place_id: "34", place_type: "Trail", place_desc: "Footscray Road Trail is a 5.1 kilometer lightly trafficked out and back trail located near Melbourne, Victoria, Australia that features a river and is good for all skill levels. The trail is primarily used for walking, running, and road biking. Dogs are also able to use this trail but must be kept on leash.", place_address: "Melbourne", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "No", place_accessible: "", place_water_tap: "No", place_elevation: "21", place_length: "5.10", place_route_type: "Out & Back", place_complete_time: "80" }, { place_id: "35", place_type: "Trail", place_desc: "Yarra River Short City Loop is a 4.0 kilometer heavily trafficked loop trail located near Melbourne, Victoria, Australia that features a river and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.", place_address: "Melbourne", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "26", place_length: "4.00", place_route_type: "Loop", place_complete_time: "61" }, { place_id: "36", place_type: "Trail", place_desc: "Westgate Trail is a 8.2 kilometer lightly trafficked out and back trail located near Melbourne, Victoria, Australia that features a river and is good for all skill levels. The trail is primarily used for walking, running, and road biking.", place_address: "Newport River Bank Reserve", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "No", place_accessible: "", place_water_tap: "No", place_elevation: "60", place_length: "8.20", place_route_type: "Out & Back", place_complete_time: "131" }, { place_id: "37", place_type: "Trail", place_desc: "Stockmans Trail is a 2.9 kilometer moderately trafficked out and back trail located near Flemington, Victoria, Australia that features a river and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", place_address: "Flemington", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "No ", place_accessible: "", place_water_tap: "Yes", place_elevation: "23", place_length: "2.90", place_route_type: "Out & Back", place_complete_time: "44" }, { place_id: "38", place_type: "Trail", place_desc: "Swanston St: West Side is a 6.1 kilometer heavily trafficked out and back trail located near Melbourne, Victoria, Australia and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round.", place_address: "", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "89", place_length: "6.10", place_route_type: "Out & Back", place_complete_time: "91" }, { place_id: "39", place_type: "Trail", place_desc: "Fawkner Park Perimeter Loop is a 2.7 kilometer moderately trafficked loop trail located near Melbourne, Victoria, Australia and is good for all skill levels. The trail is primarily used for walking and running. Dogs are also able to use this trail but must be kept on leash.", place_address: "Fawkner Park", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "35", place_length: "2.70", place_route_type: "Loop", place_complete_time: "42" }, { place_id: "40", place_type: "Trail", place_desc: "Edwards Park, Lagoon Reserve and Gasworks Arts Park is a 2.6 kilometer lightly trafficked loop trail located near Melbourne, Victoria, Australia and is good for all skill levels. The trail is primarily used for walking and running. Dogs are also able to use this trail but must be kept on leash.", place_address: "Edwards Park", place_open_hrs: "", place_difficulty: "Easy", place_toilet_avlbl: "Yes", place_accessible: "", place_water_tap: "Yes", place_elevation: "17", place_length: "2.60", place_route_type: "Loop", place_complete_time: "41" }]

    componentDidMount() {
        const winWidth = document.body.clientWidth || document.documentElement.clientWidth;
        console.log(winWidth)
        this.setState({
            browserWidth: winWidth
        }, () => {
            window.addEventListener('resize', this.handleResize.bind(this))
            this.queryData()
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

    queryData = () => {
        const { dispatch } = this.props

        dispatch({
            type: 'map/query', /* 这个是指定的数据模型 */
            payload: {},
            callback: (res) => {
                if (res) {
                    console.log(res)
                    this.setState({
                        placesData: res
                    })

                }
            },
        });
    }

    handleClickImage = (id) => {
        let dom = <></>
        let desc;
        if (this.state.placesData) {
            this.state.placesData.forEach(element => {
                if (Number(element.place_id) === Number(id)) {
                    desc = element
                }
            });
        } else {
            this.staticData.forEach(element => {
                console.log(element)
                if (Number(element.place_id) === Number(id)) {
                    desc = element
                }
            });
        }

        dom = <Row style={{ marginTop: '20px' }} type={'flex'} justify={'center'} gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={0} xl={0}>
                <img src={require('@/assets/' + id + '.jpg')} style={{ width: '100%' }}></img>
            </Col>
            {desc && desc.place_type === 'Park' &&
                <Col xs={24} sm={24} md={24} lg={14} xl={12}>
                    <Row type={'flex'} justify={'center'} gutter={[20, 20]}>
                        <Col span={6}>
                            <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>DETAILS:  </h2>
                        </Col>
                        <Col span={18}>
                            <p className={styles.poiDetailContent}>
                                {desc.place_desc}
                            </p>
                        </Col>
                        <Col span={6}>
                            <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>ADDRESS:  </h2>
                        </Col>
                        <Col span={18}>
                            <p className={styles.poiDetailContent}>
                                {desc.place_address}
                            </p>
                        </Col>
                        <Col span={6}>
                            <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>OPENING HOURS:  </h2>
                        </Col>
                        <Col span={18}>
                            <p className={styles.poiDetailContent}>
                                {desc.place_open_hrs}
                            </p>
                        </Col>
                        <Col span={6}>
                            <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>PUBLIC TOILETS:  </h2>
                        </Col>
                        <Col span={18}>
                            <p className={styles.poiDetailContent}>
                                {desc.place_toilet_avlbl}
                            </p>
                        </Col>
                        <Col span={6}>
                            <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>DRINKING WATER TAPS:  </h2>
                        </Col>
                        <Col span={18}>
                            <p className={styles.poiDetailContent}>
                                {desc.place_water_tap}
                            </p>
                        </Col>
                        <Col span={6}>
                            <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>WHEELCHAIR ACCESSIBLE:  </h2>
                        </Col>
                        <Col span={18}>
                            <p className={styles.poiDetailContent}>
                                {desc.place_accessible}
                            </p>
                        </Col>
                    </Row>
                </Col>}
            {desc && desc.place_type === 'Trail' && <Col xs={24} sm={24} md={24} lg={14} xl={12}>
                <Row type={'flex'} justify={'center'} gutter={[20, 20]}>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>DETAILS:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_desc}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>ADDRESS:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_address}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>TRAIL LENGTH:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_length + ' km'}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>DIFFICULTY LEVEL:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_difficulty}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>ELEVATION:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_elevation + ' feet'}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>ROUTE TYPE:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_route_type}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>TIME TO COMPLETE:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_complete_time + ' mins'}
                        </p>
                    </Col>

                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>PUBLIC TOILETS:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_toilet_avlbl}
                        </p>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.poiDetailTitle} style={{ textAlign: 'right' }}>DRINKING WATER TAPS:  </h2>
                    </Col>
                    <Col span={18}>
                        <p className={styles.poiDetailContent}>
                            {desc.place_water_tap}
                        </p>
                    </Col>

                </Row>
            </Col>}
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>
                <img src={require('@/assets/' + id + '.jpg')} style={{ width: '100%' }}></img>
            </Col>
        </Row>
        this.setState({
            placeInfoVisible: true,
            modalDom: dom
        })
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
                            Melbourne is considered to be Australia's garden city. It has several places where you can go for a walk or bike ride and get rejuvenated. We provide you all the parks and trails you can go to.
                            Go close to nature by escaping from the sight of concrete and take a break from a routine life. Explore mother nature at its best in Melbourne.
</p>
                    </Col>
                    <Col span={24}>
                        <Row justify={'center'} type={'flex'} style={{ padding: '60px', backgroundColor: '#e0e5e6' }} gutter={[30, 30]}>
                            <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                <Card
                                    style={{ marginLeft: 'auto', marginRight: 'auto', padding: '30px',height:'fit-content' }}
                                    cover={<img alt="trails" src={trails} style={{ marginTop: '10px' }} />}
                                >
                                    <h3 className={styles.poiFirstSectionTitle}>TRAILS</h3>
                                    <Meta description="Explore the wonderful walking and cycling trails in and around Melbourne to enjoy your active travel. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                <Card
                                    style={{ marginLeft: 'auto', marginRight: 'auto', padding: '30px',height:'fit-content' }}
                                    cover={<img alt="parks" src={parks} style={{ marginTop: '10px' }} />}
                                >
                                    <h3 className={styles.poiFirstSectionTitle}>PARKS</h3>
                                    <Meta description="Explore the lush green parks of Melbourne by walking or bike ride with your loved ones and enjoy the recreational activities on offer." />
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                    <Col span={24} style={{ padding: 60 }}>
                        <span style={{ textAlign: 'center' }}>
                            <h2 className={styles.poiSecondTitle} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Recommended Places</h2>

                        </span>
                    </Col> <Col xs={24} sm={24} md={12} lg={10} xl={9}>
                        <span style={{ textAlign: 'center' }}>
                            <h2 className={styles.poiThirdTitle} style={{ height: 'fit-content', margin: 0, padding: 0 }}>Trails</h2>

                        </span>
                        <Row style={{ padding: 10 }}>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{ padding: 0 }} onClick={() => { this.handleClickImage(34) }} className={styles.poiPlacesImage}>
                                    <img src={require('@/assets/34.jpg')} style={{ width: '100%' }}></img>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{ padding: 0 }} onClick={() => { this.handleClickImage(31) }} className={styles.poiPlacesImage}>
                                    <img src={require('@/assets/31.jpg')} style={{ width: '100%' }}></img>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{ padding: 0 }} onClick={() => { this.handleClickImage(32) }} className={styles.poiPlacesImage}>
                                    <img src={require('@/assets/32.jpg')} style={{ width: '100%' }}></img>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} xl={9}>
                        <span style={{ textAlign: 'center' }}>
                            <h2 className={styles.poiThirdTitle} style={{ height: 'fit-content', margin: 0, padding: 0 }}>
                            Parks 
                            </h2>

                        </span>
                        <Row style={{ padding: 10 }}>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{ padding: 0 }} onClick={() => { this.handleClickImage(1) }} className={styles.poiPlacesImage}>
                                    <img src={require('@/assets/1.jpg')} style={{ width: '100%' }}></img>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{ padding: 0 }} onClick={() => { this.handleClickImage(2) }} className={styles.poiPlacesImage}>
                                    <img src={require('@/assets/2.jpg')} style={{ width: '100%' }}></img>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable bodyStyle={{ padding: 0 }} onClick={() => { this.handleClickImage(3) }} className={styles.poiPlacesImage}>
                                    <img src={require('@/assets/3.jpg')} style={{ width: '100%' }}></img>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                   
                    <Col xs={24} sm={24} md={22} lg={20} xl={18} style={{ padding: 30 }}>
                        <Collapse bordered={false} onChange={(value) => { console.log(value) }} expandIconPosition={'right'}>
                            <Collapse.Panel header="Explore More" key="1" style={{ backgroundColor: 'white', textAlign: 'right', border: '0' }}>
                                <Row type={'flex'} justify={'center'} gutter={[10, 10]} style={{ padding: '30px' }}>
                                    {
                                        this.state.placesData ? this.placesData.map(
                                            item => <Col span={8}>
                                                <Card onClick={() => { this.handleClickImage(item.place_id) }} hoverable className={styles.poiPlacesImage} bodyStyle={{ padding: 0 }}>
                                                    <img src={require('@/assets/' + item.place_id + '.jpg')} style={{ width: '100%' }}></img>
                                                </Card>

                                            </Col>
                                        ) : this.staticData.map(
                                            item => <Col span={8}>
                                                <Card onClick={() => { this.handleClickImage(item.place_id) }} hoverable className={styles.poiPlacesImage} bodyStyle={{ padding: 0 }}>
                                                    <img src={require('@/assets/' + item.place_id + '.jpg')} style={{ width: '100%' }}></img>
                                                </Card>

                                            </Col>
                                        )
                                    }
                                </Row>
                            </Collapse.Panel>

                        </Collapse>



                    </Col>
                </Row>
                <Modal width={this.state.browserWidth * 0.8} footer={[]} visible={this.state.placeInfoVisible} onCancel={() => { this.setState({ placeInfoVisible: false }) }}>
                    {
                        this.state.modalDom ? this.state.modalDom : null
                    }
                </Modal>

            </div>
        );
    }
}


