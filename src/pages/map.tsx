import React from 'react';
import styles from './index.css';
import { Descriptions, Button, Slider, Form, InputNumber, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip, Modal } from 'antd';
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
import Step1 from '@/assets/Step 1.png'
import Step2 from '@/assets/Step 2.png'
import Step3 from '@/assets/Step 3.png'
import Slide1 from '@/assets/Slide1.JPG'
import Slide2 from '@/assets/Slide2.JPG'
import Slide3 from '@/assets/Slide3.JPG'
import optimize from '@/assets/optimize.jpg'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'
import img4 from '@/assets/img4.png'
import img5 from '@/assets/img5.png'
import homepage_photo1 from '@/assets/homepage_photo1.jpg'
import homepage_photo2 from '@/assets/homepage_photo2.jpg'
import homepage_photo3 from '@/assets/homepage_photo3.jpg'
import stepGuide from '@/assets/guide.jpg'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { formatCountdown } from 'antd/lib/statistic/utils';

const FormItem = Form.Item

@connect(({ map }) => ({
  map
}))
@Form.create()
export default class Travel extends React.Component {

  state = {
    age: 0, weight: 0, height: 0,
    defaultPosition: {

    },
    additionalPlaces: [],

    destination: {},
    currentId: 1,
    age: 0, weight: 0, height: 0,
    optimized_distance: 0,
    original_distance: 0,
    difference_distance: 0,
    optimized_time: 0,
    original_time: 0,
    difference_time: 0,
    optimized_avg_speed: 0,
    difference_avg_speed: 0,
    original_avg_speed: 0,
    total_calories_comsuption: 0,
    comsuption_efficiency: 0,
  }

  handleReset = () => {
    this.setState({
      additionalPlaces: [],
      age: 0, weight: 0, height: 0,
      optimized_distance: 0,
      original_distance: 0,
      difference_distance: 0,
      optimized_time: 0,
      original_time: 0,
      difference_time: 0,
      optimized_avg_speed: 0,
      difference_avg_speed: 0,
      original_avg_speed: 0,
      total_calories_comsuption: 0,
      comsuption_efficiency: 0,
      directions: undefined
    }, () => {
      this.props.form.resetFields();
    })
  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  test = () => {
    const { dispatch } = this.props

    dispatch({
      type: 'map/query', /* 这个是指定的数据模型 */
      payload: {},
      callback: (res) => {
        console.log(res)
      },
    });
  }

  handleResize = e => {
    console.log(e)
    // if (e.target.innerWidth < 1600) {
    //  console.log(e.target.innerWidth)

    // } else {
    //   console.log(e.target.innerWidth)
    // }
    this.setState({
      browserWidth: document.documentElement.clientWidth,
      browserHeight: document.documentElement.clientHeight
    }, () => {
      console.log(e.target.innerWidth)
    })
  }

  carouselChange(from, to) {
    console.log(from, to)
  }

  handleAutoCompleteChange = (address, field) => {
    const { form } = this.props
    const _this = this
    const newAddress = {}
    const newInput = {}
    newAddress[field + '_address'] = address
    newInput[field + '_text'] = address


    this.setState({
      ...newAddress,
      inputing: address
    }, () => {
      form.setFieldsValue({ ...newInput })
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          ; const newField = {}; newField[field] = latLng['lat'] + ',' + latLng['lng']; if (field + '_text' === 'startPosition_text') {
            this.setState({
              defaultPosition: {
                lat: latLng['lat'],
                lon: latLng['lng'],

              },

              currentPosition: {
                lat: latLng['lat'],
                lon: latLng['lng'],
              }
            }, () => {
              form.setFieldsValue({
                ...newField


              })
            })

          } else {
            form.setFieldsValue({
              ...newField


            })
          }
        })
        // .then(latLng => _this.setState(
        //   {
        //   destination:latLng
        // },
        // ()=>{console.log('giao!!!!!!!!1',_this.state)}
        // ))
        .catch(error => { const newField = {}; newField[field] = null; form.setFieldsValue({ ...newField }) });
    })

  };

  handleAutoCompleteSelect = (address, field) => {
    const { form } = this.props
    const _this = this
    const newAddress = {}
    const newInput = {}
    newAddress[field + '_address'] = address
    newInput[field + '_text'] = address



    this.setState({
      ...newAddress
    }, () => {
      form.setFieldsValue({ ...newInput })
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          const newField = {}; newField[field] = latLng['lat'] + ',' + latLng['lng'];
          if (field + '_text' === 'startPosition_text') {
            this.setState({
              defaultPosition: {
                lat: latLng['lat'],
                lon: latLng['lng'],

              },

              currentPosition: {
                lat: latLng['lat'],
                lon: latLng['lng'],
              }
            }, () => {
              form.setFieldsValue({
                ...newField


              })
            })

          } else {
            form.setFieldsValue({
              ...newField


            })
          }
        })
        // .then(latLng => _this.setState(
        //   {
        //   destination:latLng
        // },
        // ()=>{console.log('giao!!!!!!!!1',_this.state)}
        // ))
        .catch(error => console.error('Error', error));
    })


  };

  markerRender = () => {
    const { additionalPlaces } = this.state
    const { form } = this.props
    let formValues;
    form.validateFields((err, values) => {

      if (values) {
        formValues = values
      }
    })
    const start_marker = formValues['startPosition'] && formValues['startPosition'].split(',')[0] && formValues['startPosition'] && formValues['startPosition'].split(',')[1] && <Marker
      position={
        {
          lat: formValues['startPosition'] && formValues['startPosition'].split(',')[0] ? Number(formValues['startPosition'].split(',')[0]) : null,
          lng: formValues['startPosition'] && formValues['startPosition'].split(',')[1] ? Number(formValues['startPosition'].split(',')[1]) : null
        }
      }
    >

    </Marker>

    const way_points_marker = <>
      {
        additionalPlaces && (
          additionalPlaces.map(
            item => <Marker position={
              {
                lat: formValues['place_' + item.id] && formValues['place_' + item.id].split(',')[0] ? Number(formValues['place_' + item.id].split(',')[0]) : null,
                lng: formValues['place_' + item.id] && formValues['place_' + item.id].split(',')[1] ? Number(formValues['place_' + item.id].split(',')[1]) : null
              }
            }>

            </Marker>
          )
        )

      }
    </>

    const destination_marker = formValues['destination'] && formValues['destination'].split(',')[0] && formValues['destination'] && formValues['destination'].split(',')[1] && <Marker
      position={
        {
          lat: formValues['destination'] && formValues['destination'].split(',')[0] ? Number(formValues['destination'].split(',')[0]) : null,
          lng: formValues['destination'] && formValues['destination'].split(',')[1] ? Number(formValues['destination'].split(',')[1]) : null
        }
      }
    >

    </Marker>

    const markers = <>
      {start_marker}
      {way_points_marker}
      {destination_marker}
    </>

    return markers
  }

  componentDidMount = () => {
    this.test()
    this.getCurrentPosition()
    const winWidth = document.documentElement.clientWidth;
    const winHeight = document.documentElement.clientHeight;
    console.log(winWidth)
    this.setState({
      browserWidth: winWidth,
      browserHeight: winHeight
    }, () => {
      window.addEventListener('resize', this.handleResize.bind(this))
    })
  }

  getCurrentPosition = () => {
    navigator?.geolocation.getCurrentPosition((value) => (this.getCurrentLocation(value)))
  }

  getAddress = (value) => {
    if (value) {
      this.setState({
        defaultPosition: {
          lat: value.coords.latitude,
          lon: value.coords.longitude,
          accuracy: value.coords.accuracy
        },

        currentPosition: {
          lat: value.coords.latitude,
          lon: value.coords.longitude,
          accuracy: value.coords.accuracy
        }

      }, () => {

      })
    }

  }

  getCurrentLocation = (value) => {
    const { form } = this.props
    if (value) {
      console.log('地图信息获取', value)

      Geocode.setApiKey("AIzaSyAQ5KNjrj74hz6dkrVn24Ho_tjcrQCUECU");
      Geocode.fromLatLng(String(value.coords.latitude), String(value.coords.longitude)).then(
        response => {
          const address = response.results[0].formatted_address;
          console.log('地址获取！！！！！！！！')
          form.setFieldsValue({ startPosition_text: address })
        },
        error => {
          console.error(error);
        }
      );
      this.setState({
        defaultPosition: {
          lat: value.coords.latitude,
          lon: value.coords.longitude,
          accuracy: value.coords.accuracy
        },
        currentPosition: {
          lat: value.coords.latitude,
          lon: value.coords.longitude,
          accuracy: value.coords.accuracy
        }
      }, () => {

        form.setFieldsValue({ startPosition: String(value.coords.latitude) + ',' + String(value.coords.longitude) })
      })
    } else {
      message.error('Current location loading was failed!!!')
    }
  }

  optimize = () => {
    const { form } = this.props
    const { additionalPlaces } = this.state

    form.validateFields((err, values) => {
      if (!values['startPosition'] || !values['destination']) {
        message.error('Please entering the start position and destination!')
        return
      }
      const DirectionsService = new google.maps.DirectionsService();
      let wayPoints = []
      additionalPlaces.forEach(item => {
        if (values['place_' + String(item.id)]) {
          const obj = new google.maps.LatLng(Number(values['place_' + String(item.id)].split(',')[0]), Number(values['place_' + String(item.id)].split(',')[1]))
          wayPoints.push(
            {
              location: obj,
              stopover: true,
            })
        }
      })

      const travelMode = values['mode']




      DirectionsService.route({
        origin: new google.maps.LatLng(Number(values['startPosition'].split(',')[0]), Number(values['startPosition'].split(',')[1])),
        destination: new google.maps.LatLng(Number(values['destination'].split(',')[0]), Number(values['destination'].split(',')[1])),
        travelMode: google.maps.TravelMode[travelMode],
        waypoints: wayPoints,
        optimizeWaypoints: true
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            optimized_routes: result.routes
          }, () => {
            DirectionsService.route({
              origin: new google.maps.LatLng(Number(values['startPosition'].split(',')[0]), Number(values['startPosition'].split(',')[1])),
              destination: new google.maps.LatLng(Number(values['destination'].split(',')[0]), Number(values['destination'].split(',')[1])),
              travelMode: google.maps.TravelMode[travelMode],
              waypoints: wayPoints,
              optimizeWaypoints: false
            }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({

                  original_routes: result.routes
                }, () => {
                  this.travelPredictionRender()
                });
              } else {
                message.error('No Routes has been found!');
              }
            });
          });
        } else {
          message.error(`No Routes has been found!`);
        }
      });
    })

  }

  travelPredictionRender = () => {
    const { form } = this.props
    let { original_routes, optimized_routes } = this.state
    let optimized_distance = 0
    let original_distance = 0
    let difference_distance = 0
    let optimized_time = 0
    let original_time = 0
    let difference_time = 0
    let optimized_avg_speed = 0
    let original_avg_speed = 0
    let difference_avg_speed = 0
    let total_calories_comsuption = 0
    let comsuption_efficiency = 0



    let original_legs = original_routes && original_routes[0] && original_routes[0].legs ? original_routes[0].legs : []
    let optimized_legs = optimized_routes && optimized_routes[0] && optimized_routes[0].legs ? optimized_routes[0].legs : []

    original_legs.length > 0 && original_legs.forEach(element => {
      original_distance += element.distance.value
      original_time += element.duration.value
    });

    optimized_legs.length > 0 && optimized_legs.forEach(element => {
      optimized_distance += element.distance.value
      optimized_time += element.duration.value
    });

    difference_distance = original_distance - optimized_distance
    difference_time = original_time - optimized_time

    if (optimized_distance && original_distance && optimized_time && original_time) {
      original_avg_speed = (original_distance / original_time).toFixed(2)
      optimized_avg_speed = (optimized_distance / optimized_time).toFixed(2)
      difference_avg_speed = original_avg_speed - optimized_avg_speed
      form.validateFields((err, values) => {
        if (values['weight']) {
          if (values['mode'] === 'WALKING') {
            total_calories_comsuption = Math.round((3 * values['weight'] * (optimized_time / 60)) / 60)
            comsuption_efficiency = Math.round(total_calories_comsuption / (optimized_time / 60))
          } else if (values['mode'] === 'BICYCLING') {
            total_calories_comsuption = Math.round((7.5 * values['weight'] * (optimized_time / 60)) / 60)
            comsuption_efficiency = Math.round(total_calories_comsuption / (optimized_time / 60))
          }

        }
      })
    }



    this.setState({
      optimized_distance,
      original_distance,
      difference_distance,
      optimized_time,
      original_time,
      difference_time,
      optimized_avg_speed,
      original_avg_speed,
      difference_avg_speed,
      total_calories_comsuption,
      comsuption_efficiency,
    })
  }

  initUserCurrentPosition = () => {

  }

  setUserCurrentPosition = () => {

  }

  addPlaces = () => {
    const currentList = [...this.state.additionalPlaces]
    const currentId = this.state.currentId
    if (this.state.additionalPlaces.length < 3) {
      currentList.push(
        {
          id: currentId,
          name: '',
          position: currentList.length + 1,
          location: {}
        }
      )
      this.setState({
        additionalPlaces: currentList,
        currentId: currentId + 1
      }, () => {
        message.success('Stop Added!')
      })
    } else {
      message.error('You could only add up to 3 additional waypoints!')
    }
  }

  removePlaces = (position) => {
    const { form: { getFieldDecorator } } = this.props
    let finalList = []
    const currentList = [...this.state.additionalPlaces]
    let counter = 1
    if (this.state.additionalPlaces.length !== 0) {
      currentList.forEach(item => {
        if (item.position !== position) {
          let obj = { ...item }
          obj['position'] = counter
          counter += 1
          finalList.push(obj)
        }
      })
      this.setState({
        additionalPlaces: finalList
      }, () => {
        message.success('Stop Removed!')

      })
    }
  }

  setPosition = () => {
    this.state.additionalPlaces.forEach(el => {
      this.handleAutoCompleteChange(this.props.form.getFieldsValue('place_' + String(el.id) + '_text'), 'place_' + String(el.id))

    })
  }

  sendRequest = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'map/query',
      payload: {},
      callback: (res) => {
        if (res) {
        }
      }
    })
  }


  getMapStatus = (isload) => {
    this.setState({
      mapIsLoad: isload
    }, () => {
    })
  }

  componentDidUpdate = () => {

  }

  constructSeriesPlacesBar = () => {
    const { form: { getFieldDecorator } } = this.props
    const { additionalPlaces, destination_address, startPosition_address } = this.state
    const searchOptions = {
      location: new google.maps.LatLng(-34, 144),
      radius: 60000,
      types: ['establishment']
    }
    const start_autoComplete = <PlacesAutocomplete
      value={startPosition_address}
      searchOptions={searchOptions}
      onChange={(e) => { this.handleAutoCompleteChange(e, 'startPosition') }}
      onSelect={(e) => { this.handleAutoCompleteSelect(e, 'startPosition') }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          {getFieldDecorator('startPosition_text')(
            <Input
              {...getInputProps({
                placeholder: 'Start',
                className: 'location-search-input',
              })}
            />
          )}

          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>

    const wayPoints_autoComplete =

      <>
        {additionalPlaces.map(
          item =>
            <Col><Row gutter={[10, 10]} type={'flex'} align="middle">
              <Col span={22}>
                {/* {getFieldDecorator('place_' + String(item.id))( */}
                <PlacesAutocomplete
                  value={this.state.inputing}
                  searchOptions={searchOptions}
                  onChange={(e) => { this.handleAutoCompleteChange(e, 'place_' + String(item.id)) }}
                  onSelect={(e) => { this.handleAutoCompleteSelect(e, 'place_' + String(item.id)) }}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      {getFieldDecorator('place_' + String(item.id) + '_text')(
                        <Input
                          {...getInputProps({
                            placeholder: 'Place ' + String(item.position),
                            className: 'location-search-input',
                          })}
                        />
                      )}

                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
                {/* )} */}
              </Col>
              <Col span={2}>
                <CloseOutlined onClick={() => { this.removePlaces(item.position) }} style={{ fontSize: '18px', color: 'red' }} />
              </Col>
            </Row>
            </Col>

        )
        }
      </>

    const end_autoComplete = <PlacesAutocomplete
      value={destination_address}
      searchOptions={searchOptions}
      onChange={(e) => { this.handleAutoCompleteChange(e, 'destination') }}
      onSelect={(e) => { this.handleAutoCompleteSelect(e, 'destination') }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          {getFieldDecorator('destination_text')(
            <Input
              {...getInputProps({
                placeholder: 'End',
                className: 'location-search-input',
              })}
            />
          )}

          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>

    return (
      <>
        <Col>
          <Row type={'flex'} align="middle">
            <Col span={22}>
              {start_autoComplete}
              {getFieldDecorator('startPosition')(
                <Input placeholder={'Start'} style={{ display: 'none' }}></Input>
              )}
            </Col>
            <Col span={2}>
              <EnvironmentOutlined
                style={{ fontSize: '18px' }}
                onClick={() => {
                  this.getCurrentPosition()
                }}></EnvironmentOutlined>
            </Col>
          </Row>
          {/* <Divider>Start & Destination</Divider> */}

          <CaretDownOutlined />
        </Col>

        <Col>

          {additionalPlaces.map(
            item =>
              <Col><Row gutter={[10, 10]} type={'flex'} align="middle">
                <Col span={22}>
                  {getFieldDecorator('place_' + String(item.id))(
                    <Input placeholder={'Place ' + String(item.position)} style={{ display: 'none' }}></Input>
                  )}
                </Col>
                <Col span={2}>

                </Col>
              </Row>
              </Col>

          )
          }

          {wayPoints_autoComplete}


          <PlusOutlined onClick={this.addPlaces} style={{ fontSize: '30px' }} />

        </Col>
        <Col>
          <CaretDownOutlined />
          {end_autoComplete}
          {/* <Divider>Destination</Divider> */}
          {getFieldDecorator('destination')(
            <Input placeholder={'End'} style={{ display: 'none' }}></Input>
          )}
        </Col>

      </>


    )
  }

  changeAge = (value) => {
    this.setState({
      age: value,
    });
  }

  changeHeight = (value) => {
    this.setState({
      height: value,
    });
  }

  changeWeight = (value) => {
    this.setState({
      weight: value,
    });
  }

  render() {
    const { age, weight, height,
      optimized_distance,
      original_distance,
      difference_distance,
      optimized_time,
      original_time,
      difference_time,
      optimized_avg_speed,
      difference_avg_speed,
      original_avg_speed,
      total_calories_comsuption,
      comsuption_efficiency,
    } = this.state
    const { form: { getFieldDecorator } } = this.props

    const { browserWidth, browserHeight } = this.state

    let contentStyle = {
      position: 'relative',
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
      zIndex: 0
    }

    let imgStyle = {
      width: '100%',
      height: browserWidth * 1 / 2,
      color: '#fff',
      lineHeight: browserWidth * 1 / 2,
      textAlign: 'center',
      background: '#364d79',
      zIndex: 0
    }

    let titleStyle1 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let titleStyle2 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth * 2,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let titleStyle3 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth * 3,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let titleStyle4 = {
      position: 'absolute',
      textAlign: 'center',
      top: 10,
      left: browserWidth * 4,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 2,
      fontSize: browserWidth / 20,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',

    }

    let textStyle1 = {
      position: 'absolute',
      textAlign: 'center',
      top: 20 + browserWidth / 15 + 10,
      left: browserWidth,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 80,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '1',

    }

    let textStyle2 = {
      position: 'absolute',
      textAlign: 'center',
      top: 20 + browserWidth / 15 + 10,
      left: browserWidth * 2,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 80,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '1',

    }

    let textStyle3 = {
      position: 'absolute',
      textAlign: 'center',
      top: 20 + browserWidth / 15 + 10,
      left: browserWidth * 3,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 80,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '1',
    }

    let textStyle4 = {
      position: 'absolute',
      textAlign: 'center',
      top: 20 + browserWidth / 15 + 10,
      left: browserWidth * 4,
      width: browserWidth,
      padding: browserWidth / 20,
      zIndex: 1,
      fontSize: browserWidth / 80,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '1',

    }

    const staticOptions = [
      { title: 'Library', value: 'Library' },
      { title: 'Museum', value: 'Museum' },
      { title: 'Coffee Shop', value: 'Coffee Shop' }
    ]

    // const contentStyle = {
    //   width: '100%',
    //   color: '#fff',
    //   opacity: 0.3,
    //   textAlign: 'center',
    //   background: '#364d79',

    // };

    const imgTitleStyle = {
      position: 'absolute',
      padding: '10px',
      // top: '8px',
      // left: '16px',
      fontSize: '28px',
      color: '#000',
      textAlign: 'center',
    }

    const imgContentStyle = {
      position: 'absolute',
      top: '70px',
      padding: '20px',
      // left: '16px',
      fontSize: '14px',
      color: '#000',
      textAlign: 'left',
    }

    const distance_option = {
      xAxis: {
        type: 'category',
        data: ['Original', 'Optimized']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} km'
        },
        axisPointer: {
          snap: true
        }
      },
      series: [{
        data: [
          {
            value: original_distance / 1000,


            itemStyle: {
              color: '#FFEB3B'
            }
          },
          {
            value: optimized_distance / 1000,
            itemStyle: {
              color: '#388E3C'
            }
          },
          // {
          //   value: difference_distance / 1000,
          //   itemStyle: {
          //     color: '#3F51B5'
          //   }
          // }
        ],
        type: 'bar'
      }]
    };

    const speed_option = {
      xAxis: {
        type: 'category',
        data: ['Original', 'Optimized', 'Differences']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [
          {
            value: original_avg_speed,


            itemStyle: {
              color: '#FFEB3B'
            }
          },
          {
            value: optimized_avg_speed,
            itemStyle: {
              color: '#388E3C'
            }
          },
          {
            value: difference_avg_speed,
            itemStyle: {
              color: '#3F51B5'
            }
          }],
        type: 'bar'
      }]
    };

    const time_option = {
      xAxis: {
        type: 'category',
        data: ['Original', 'Optimized']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} min'
        },
        axisPointer: {
          snap: true
        }
      },
      series: [{
        data: [
          {
            value: Math.round(original_time / 60),


            itemStyle: {
              color: '#FFEB3B'
            }
          },
          {
            value: Math.round(optimized_time / 60),
            itemStyle: {
              color: '#388E3C'
            }
          },
          // {
          //   value: Math.round(difference_time / 60),
          //   itemStyle: {
          //     color: '#3F51B5'
          //   }
          // }
        ],
        type: 'bar'
      }]
    };

    return (
      <>
      <Row>
      <Col span ={2}>
        </Col>
        <Col span={20}>
        <h2 className={styles.planTitle}>Plan Your Journey</h2>
        </Col>
        <Col span={2}>
        <h2><Button icon={'info'}style={{margin:'0 auto',position:'relative',top:'50%',borderRadius:'50%'}}onClick={()=>{this.setState({guildanceVisible:true})}}></Button></h2>
        </Col>
      
      
     
      </Row>
     <Modal width = {browserWidth*0.8}  footer={false} visible={this.state.guildanceVisible} onCancel={()=>{this.setState({
       guildanceVisible:false
     })}}>
       <div style={{padding:'30px 10px 10px 10px'}}>
     <Carousel autoplay autoplaySpeed={4000} infinite={true} beforeChange={this.carouselChange} style={{ height: browserWidth * 1 / 2 }} dotPosition={'top'} dots={true}>
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>New to Melbourne?</h3> */}
            {/* 
           <h2>

              Explore your surroundings with us. <br />
Walk or cycle to places near you quicker.<br />
Do multiple things on the go.
                  </h2>   */}

            <img src={Step1} style={imgStyle}></img>
           
          </div>
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>Travel smarter!</h3> */}
            {/* <h2 >
              Optimize your travel with us. <br />
Do more in less time.<br />
Discover how much time you saved by travelling with us.

                  </h2>  */}

            <img src={Step2} style={imgStyle} ></img>
           
          </div>
          <div style={contentStyle}>
            {/* <h3 style={contentStyle}>Travel smarter!</h3> */}
            {/* <h2 >
              Optimize your travel with us. <br />
Do more in less time.<br />
Discover how much time you saved by travelling with us.

                  </h2>  */}

            <img src={Step3} style={imgStyle} ></img>
            
          </div>
          

          {/* <div className={styles.show_img_container}>
                <div style={imgTitleStyle}> Feeling unsafe in dark?</div>
                <div style={imgContentStyle}>
                  We will help you get to a place where you feel safe.<br />
Find a well-lighted route near you using our website.<br />
Check out the number of people near you.
            </div>
                <img src={img3} style={contentStyle} ></img>
              </div> */}
        </Carousel>
       </div>

     </Modal>
   
        <div id="map" className={styles.background} >

          <Row gutter={[10, 10]} >

            <Col xs={24} lg={24} xl={24}>
          

                <div className={styles.mapContainer}>
                  <MyComponent directions={this.state.directions} markers={this.markerRender.bind(this)} startPoint={this.state.directions ? null : this.state.defaultPosition} getMapStatus={this.getMapStatus.bind(this)}></MyComponent>
                  <div className={styles.mapLocateButton}>
                    {this.state.mapIsLoad && <Button
                      type="default"
                      size='large'
                      icon={'environment'}
                      onClick={() => {
                        this.getCurrentPosition()
                      }}></Button>}

                  </div>

                </div>
            </Col>
            <Col span={24} style={{backgroundColor:'white',padding:'30px'}}>
            
            <Row>
            <Col xs={24} lg={12} xl={12}>
              <h2 className={styles.mapSecondTitle}>Plan</h2>
              
                <Row gutter={[10, 10]} justify={'end'}>
                  <Col>
                    {
                      this.state.mapIsLoad && this.constructSeriesPlacesBar()
                    }
                  </Col>

                  <Col>
                    <Row gutter={[10, 10]} justify={'end'} type={'flex'}>
                      <Col style={{ textAlign: 'right' }} span={12}>
                        {
                          getFieldDecorator('mode', {
                            initialValue: 'WALKING'
                          })(
                            <Radio.Group

                              buttonStyle={{ background: '#364d79', color: '#fff' }}
                            >
                              <Radio.Button value="WALKING">WALKING</Radio.Button>
                              <Radio.Button value="BICYCLING">BICYCLING</Radio.Button>
                            </Radio.Group>)
                        }
                      </Col>
                      <Col span={12}>
                        <Row gutter={[10, 10]} justify={'end'} type={'flex'}>
                          <Col span={13} style={{ textAlign: 'right' }}>
                            {this.state.mapIsLoad && <Button style={{ background: '#303F9F', color: '#fff' }} onClick={this.optimize}>
                              <RocketOutlined />Optimize
                    </Button>}
                          </Col >

                          <Col span={11} style={{ textAlign: 'left' }}>
                            {this.state.mapIsLoad && <Button onClick={this.handleReset}>
                              <RedoOutlined />Reset
                    </Button>}
                          </Col>
                        </Row>


                      </Col>

                    </Row>
                  </Col>



                </Row>

            </Col>

            <Col xs={24} lg={12} xl={12}>
<h2 className={styles.mapSecondTitle}>Enter Your Weight</h2>
             
                <Form>
                  {/* <Row type={'flex'} justify={'center'}>
                  
                  <Col xs={14} md={12} xl={12} xxl={8}>
                    <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'Age'}>
                      {
                        getFieldDecorator('age')(
                          <Slider min={0} max={140}
                            onChange={
                              this.changeAge
                            }
                            value={typeof age === 'number' ? age : 0}
                          ></Slider>
                        )
                      }
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    {
                      getFieldDecorator('age', {
                        initialValue: 0
                      })(

                        <InputNumber

                          min={0}
                          max={140}
                          style={{ margin: '0 16px' }}
                          value={age || 0}
                          onChange={this.changeAge}
                          formatter={value => `${value}   year`}
                          parser={value => value.replace('   year', '')}
                        />
                      )
                    }


                  </Col>
                  
                </Row>
                <Row type={'flex'} justify={'center'}>
                  <Col xs={14} md={12} xl={12} xxl={8}>
                    <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} label={'Height'}>
                      {
                        getFieldDecorator('height')(
                          <Slider min={0} max={300} step={0.1}
                            onChange={
                              this.changeHeight
                            }
                            value={typeof height === 'number' ? height : 0}></Slider>
                        )
                      }
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    {
                      getFieldDecorator('height', {
                        initialValue: 0
                      })(
                        <InputNumber
                          min={0}
                          max={300}
                          style={{ margin: '0 16px' }}
                          value={height || 0}
                          onChange={this.changeHeight}
                          formatter={value => `${value}   cm`}
                          parser={value => value.replace('   cm', '')}
                        />
                      )
                    }

                  </Col>
                  
                </Row> */}
                  <Row type={'flex'} justify={'center'}>
                    
                    <Col span={18}>
                      {
                        getFieldDecorator('weight', {
                          initialValue: 0
                        })(
                          <Input
                         
                            style={{ margin: '0 16px' }}
                            suffix={'kg'}

                            value={weight}
                            onChange={this.changeWeight}
                          />)

                      }


                    </Col>
                    {/* <Col> */}
                    {/* <Divider  >
                      <h2>Health</h2>
                    </Divider> */}

                    {/* <Descriptions title="Calories burned">
                      <Descriptions.Item label="Total calories burned">{total_calories_comsuption && String(total_calories_comsuption) + ' cal' || 0} </Descriptions.Item>
                      <Descriptions.Item label="Burning efficiency">{comsuption_efficiency && String(comsuption_efficiency) + ' cal/min' || 0}</Descriptions.Item>

                    </Descriptions> */}
                    {/* </Col> */}
                  </Row>
                  {/* <this.PlaceDetailsComponent></this.PlaceDetailsComponent> */}
                </Form>

            </Col>
            </Row>
            </Col>
            
     
            <Col span={24}>
              

           
                <Row style={{padding:'30px'}}>

               <Col span={24}>
               <h2 className={styles.optimizedResultTitle}>Trip Analysis</h2>
               </Col>



                  <Col xs={24} xl={8}>
                    <Row>
                      <Col xs={24} xl={24}>
                      <h2 className={styles.optimizedTitle}>
                          Distance Reduced
                      </h2>
                       
                        <h2 className={styles.optimizedNumber}>{difference_distance && String(difference_distance / 1000) || 0}</h2>
                        <h4 style={{ color: '#aaa' }}>
                          Kilometres
                      </h4>
                        {/* <p>
                      Estimated route distance Reduced(min)
                      </p> */}
                        {/* <Descriptions title="Distance Prediction" > */}
                        {/* <Descriptions.Item label="Estimated route distance(original)">{original_distance && String(original_distance / 1000) + ' km' || 0}</Descriptions.Item>
                        <Descriptions.Item label="Estimated route distance(optimized)">{optimized_distance && String(optimized_distance / 1000) + ' km' || 0}</Descriptions.Item> */}

                        {/* <Descriptions.Item label="Estimated route distance Reduced">{optimized_distance && String(optimized_distance / 1000) + ' km' || 0}</Descriptions.Item> */}
                        {/* <Descriptions.Item label="Total distance reduced by optimizer">{difference_distance && String(difference_distance / 1000) + ' km' || 0}</Descriptions.Item> */}
                        {/* </Descriptions> */}
                      </Col>
                      {/* <Col xs={24} xl={24}>
                      <ReactECharts option={distance_option} />
                    </Col> */}
                    </Row>
                  </Col>


                  <Col xs={24} xl={8}>
                    <Row>
                      <Col xs={24} xl={24}>
                        <h2 className={styles.optimizedTitle}>
                          Time Saved
                      </h2>
                        
                        <h2 className={styles.optimizedNumber}>{difference_time && String(Math.round((difference_time / 60))) || 0}</h2>
                        <h4 style={{ color: '#aaa' }}>
                          minutes
                      </h4>
                        {/* <p>
                      Estimated time Reduced(min)
                      </p> */}
                        {/* <Descriptions title="Time Prediction"> */}
                        {/* <Descriptions.Item label="Estimated time(original)">{original_time && String(Math.round(original_time / 60)) + ' mins' || 0}</Descriptions.Item>
                        <Descriptions.Item label="Estimated time(optimized)">{optimized_time && String(Math.round((optimized_time / 60))) + ' mins' || 0}</Descriptions.Item> */}

                        {/* <Descriptions.Item label="Estimated time Reduced">{optimized_time && String(Math.round((optimized_time / 60))) + ' mins' || 0}</Descriptions.Item> */}
                        {/* <Descriptions.Item label="Total time reduced by optimizer">{difference_time && String(Math.round(difference_time / 60)) + ' mins' || 0}</Descriptions.Item> */}
                        {/* </Descriptions> */}
                      </Col>
                      {/* <Col xs={24} xl={24}>
                      <ReactECharts option={time_option} />
                    </Col> */}
                    </Row>
                  </Col>





                  <Col xs={24} xl={8}>
                    <Row>
                      <Col xs={24} xl={24}>

                        {/* <Descriptions title="Travel Speed Prediction"> */}
                        <h2 className={styles.optimizedTitle}>Calories Burned</h2>
                       
                        <h2 className={styles.optimizedNumber}>
                          {total_calories_comsuption && String(total_calories_comsuption) || 0}
                        </h2>
                        <h4 style={{ color: '#aaa' }}>
                          calories
                      </h4>
                        {/* <p>
                        Estimated Average speed(m/s)
                        </p> */}
                        {/* <Descriptions.Item label="Estimated Average speed(m/s)">{optimized_avg_speed && String(optimized_avg_speed) + ' m/s' || 0}</Descriptions.Item> */}
                        {/* </Descriptions> */}
                      </Col>
                    </Row>
                  </Col>



                </Row>

              
            </Col>
          </Row>
          <div>
          </div>
        </div>
        {/* <Button onClick={()=>{this.test()}}>测试</Button> */}
      </>
    );
  }
}


