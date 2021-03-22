import React from 'react';
import styles from './index.css';
import { Button, Form, Select, Row, Col } from 'antd';
import { connect } from 'dva';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const FormItem = Form.Item

@connect(({ map }) => ({
  map
}))
@Form.create()
export default class App extends React.Component {

  state = {

  }

  // PlaceDetailsComponent() {
  //   const { isLoaded } = useJsApiLoader({
  //     id: 'google-map-script',
  //     googleMapsApiKey: "AIzaSyAQ5KNjrj74hz6dkrVn24Ho_tjcrQCUECU"
  //   })

  //   const [map, setMap] = React.useState(null)

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map)
  //   }, [])

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  //   }, [])
  //   const containerStyle = {
  //     width: '100vw',
  //     height: '79vh',
  //     };

  //   return isLoaded ? (
  //     <GoogleMap
  //       mapContainerStyle={containerStyle}
  //       center={{
  //         lat: 60.1699,
  //         lng: 24.9384
  //       }}
  //       zoom={10}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >
  //       { /* Child components, such as markers, info windows, etc. */}
  //       <></>
  //     </GoogleMap>
  //   ) : <></>
  // }

  componentDidMount = () => {
    // const { isLoaded } = useJsApiLoader({
    //   id: 'google-map-script',
    //   googleMapsApiKey: "YOUR_API_KEY"
    // })
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
      <div id="map">

        <Form>
          <Row type={'flex'} justify={'center'}>
            <Col span={24}>
              <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'First priority place'}>
                {
                  getFieldDecorator('placeholder')(
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
            <Col span={24} >
              <Button type={'primary'} onClick={this.sendRequest}>Plan Now!</Button>
            </Col>

          </Row>
{/* <this.PlaceDetailsComponent></this.PlaceDetailsComponent> */}
        </Form>




      </div>
    );
  }
}
