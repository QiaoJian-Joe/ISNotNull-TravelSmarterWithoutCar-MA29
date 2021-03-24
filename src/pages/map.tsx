import React from 'react';
import styles from './index.css';
import { Button, Form, Select, Row, Col, Spin, Card, Carousel } from 'antd';
import { connect } from 'dva';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Map, Marker } from 'react-amap';

const FormItem = Form.Item

@connect(({ map }) => ({
  map
}))
@Form.create()
export default class Travel extends React.Component {

  state = {
    defaultPosition: {

    }
  }

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((value) => (this.getAddress(value)));
    } else {
      alert("Could not get the location info.");
    }
  }

  getAddress = (value) => {
    console.log(value.coords.latitude, value.coords.longitude, value.coords.accuracy)
    if (value) {
      this.setState({
        defaultPosition: {
          lat: value.coords.latitude,
          lon: value.coords.longitude,
          accuracy: value.coords.accuracy
        }
      }, () => {

      })
    }

  }

  initUserCurrentPosition = () => {

  }

  setUserCurrentPosition = () => {

  }

  sendRequest = () => {
    console.log('clicked:', this)
    const { dispatch } = this.props
    dispatch({
      type: 'map/query',
      payload: {},
      callback: (res) => {
        if (res) {
          console.log(res)
        }
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    const staticOptions = [
      { title: 'Library', value: 'Library' },
      { title: 'Museum', value: 'Museum' }
    ]
    return (
      <div id="map" className={styles.background}>

        <Carousel>
          <div>
            <h3>1</h3>
          </div>
        </Carousel>


        <Card style={{ padding: 20 }}>
          <Form>
            <Row type={'flex'} justify={'center'}>
              <Col span={24}>
                <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'First priority place'}>
                  {
                    getFieldDecorator('firstType')(
                      <Select>
                        {
                          staticOptions.map(
                            item => <Option value={item.value}>{item.title}</Option>
                          )
                        }
                      </Select>
                    )
                  }
                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'Second priority placee'}>
                  {
                    getFieldDecorator('Second priority place')(
                      <Select>
                        {
                          staticOptions.map(
                            item => <Option value={item.value}>{item.title}</Option>
                          )
                        }
                      </Select>
                    )
                  }
                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'Third priority place'}>
                  {
                    getFieldDecorator('Third priority place')(
                      <Select>
                        {
                          staticOptions.map(
                            item => <Option value={item.value}>{item.title}</Option>
                          )
                        }
                      </Select>
                    )
                  }
                </FormItem>
              </Col>
            </Row>
            <Row type={'flex'} justify={'end'}>
              <Col  >

                <Button type={'primary'} onClick={this.sendRequest}>Plan Now!</Button>


              </Col>
            </Row>



            {/* <this.PlaceDetailsComponent></this.PlaceDetailsComponent> */}
          </Form>

        </Card>




      </div>
    );
  }
}
