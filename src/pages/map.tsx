import React from 'react';
import styles from './index.css';
import { Button, Form, Select, Row, Col, Spin, Card, Carousel, Radio, Input } from 'antd';
import { connect } from 'dva';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Map, Marker } from 'react-amap';
import { AimOutlined,CaretDownOutlined } from '@ant-design/icons'
import MyComponent from '@/pages/googleMap'
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


  carouselChange(from, to) {
    console.log(from, to);
  }

  getMapStatus = (isload) => {
    this.setState({
      mapIsLoad: isload
    }, () => {
      console.log(isload)
    })
  }

  constructSeriesPlacesBar = () => {
    const { form: { getFieldDecorator } } = this.props
    return (
      <Row gutter={[10, 10]} justify={'end'}>
        <Col>
      
          {getFieldDecorator('placeholder')(
            <Input placeholder={'Start'}></Input>
          )}
        </Col>
        <CaretDownOutlined />
        <Col> {getFieldDecorator('placeholder')(
          <Input placeholder={'Place'}></Input>
        )}
        </Col>
        <Col>
        <CaretDownOutlined />
          {getFieldDecorator('placeholder')(
            <Input placeholder={'End'}></Input>
          )}
        </Col>
        <Col style={{textAlign:'right'}}>
        <Button type={'primary'}>GO</Button>
        </Col>
       
      </Row>
    )
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    const staticOptions = [
      { title: 'Library', value: 'Library' },
      { title: 'Museum', value: 'Museum' }
    ]

    const contentStyle = {
      height: '400px',
      color: '#fff',
      lineHeight: '400px',
      textAlign: 'center',
      background: '#364d79',
    };

    return (
      <div id="map" className={styles.background}>

        <Carousel beforeChange={this.carouselChange}>
          <div >
            <h3 style={contentStyle}> 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}> 3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>


        <Card style={{ padding: 20 }} hoverable>
          <Form>
            <Row type={'flex'} justify={'center'}>
              <Col xs={24} md={24} xl={24} xxl={8}>
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
              <Col xs={24} md={24} xl={24} xxl={8}>
                <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'Second priority place'}>
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
              <Col xs={24} md={24} xl={24} xxl={8}>
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
            <Row type={'flex'} justify={'end'} gutter={[10, 10]}>
              <Col>
                <Radio.Group name="radiogroup" defaultValue={1} >
                  <Radio value={1}>Shortest Distance</Radio>
                  <Radio value={2} disabled>Rating First</Radio>
                </Radio.Group>
              </Col>
              <Col  >

                <Button type={'primary'} onClick={this.sendRequest}>Plan Now!</Button>


              </Col>
            </Row>



            {/* <this.PlaceDetailsComponent></this.PlaceDetailsComponent> */}
          </Form>

        </Card>
        <Row>
          <Col span={17}>
            <Card style={{ padding: 20 }} hoverable>
              <div className={styles.mapContainer}>
                <MyComponent startPoint={this.state.defaultPosition || null} getMapStatus={this.getMapStatus.bind(this)}></MyComponent>
                <div className={styles.mapLocateButton}>
                  {this.state.mapIsLoad && <Button
                    type="default"
                    size='large'
                    icon={'environment'}
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((value) => (this.getAddress(value)));
                      } else {
                        alert("Could not get the location info.");
                      }
                    }}></Button>}

                </div>

              </div>

            </Card>
          </Col>
          <Col span={7}>
            <Card style={{ padding: 0 }} title={'PLAN'} bordered hoverable headStyle={{background:'#364d79',color:'#fff'}}> 
              
              <div>
                {
                  this.constructSeriesPlacesBar()
                }
              </div>
            </Card>
          </Col>
        </Row>





      </div>
    );
  }
}


