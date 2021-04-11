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

const FormItem = Form.Item
const { Meta } = Card;
@connect(({ }) => ({

}))
@Form.create()
export default class Login extends React.Component {

  state = {

  }

  handleSubmit = () => {
    const { form, getValidation } = this.props
    const password = 'isNotNull'
    form.validateFields((err, values) => {
      console.log(values && values['password'] === password)
      if (values && values['password'] === password) {
        getValidation(true)
      } else {
        getValidation(false)
      }
    })
  }

  render() {

    const { form: { getFieldDecorator } } = this.props


    return (
      <div style={{width:'100%'}}>
        <div style={{margin:'0px auto'}} className={styles.login}>
  
        <Row >
          <Col>
            <h1 className={styles.loginTitle}>Welcome to The Travel Smarter in Melbourne</h1>
            <h1 className={styles.loginSecondaryTitle}>without a car</h1>
          </Col>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <Col span={8}>
            {
              getFieldDecorator('password')(
                <Input placeholder='please entering the password to access!'></Input>
              )
            }
          </Col>
          <Col span={4}>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Col>
        </Row>

        </div>
       

      </div>
    );
  }
}


