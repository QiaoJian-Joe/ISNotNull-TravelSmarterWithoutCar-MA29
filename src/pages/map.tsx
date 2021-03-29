import React from 'react';
import styles from './index.css';
import { Button, Form, Select, Row, Col, Spin, Card, Carousel, Radio, Input, Divider, message, Tooltip } from 'antd';
import { connect } from 'dva';
import { Autocomplete, Marker, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import { AimOutlined, CaretDownOutlined, PlusCircleOutlined, CloseOutlined, PlusOutlined, EnvironmentOutlined } from '@ant-design/icons'
import MyComponent from '@/pages/googleMap'
import Geocode from "react-geocode";
import show_img_1 from '@/assets/show_img_1.png'
import show_img_2 from '@/assets/show_img_2.png'
import show_img_3 from '@/assets/show_img_3.png'
import show_img_4 from '@/assets/show_img_4.png'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const FormItem = Form.Item

@connect(({ map }) => ({
  map
}))
@Form.create()
export default class Travel extends React.Component {

  state = {
    defaultPosition: {

    },
    additionalPlaces: [],

    destination: {},
    currentId: 1
  }

  handleAutoCompleteChange = (address, field) => {
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
        .then(latLng => { const newField = {}; newField[field] = latLng['lat'] + ',' + latLng['lng']; form.setFieldsValue({ ...newField }) })
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
        .then(latLng => { const newField = {}; newField[field] = latLng['lat'] + ',' + latLng['lng']; form.setFieldsValue({ ...newField }) })
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
    console.log(null ? '真的' : '假的')
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
    Geocode.setApiKey("AIzaSyAQ5KNjrj74hz6dkrVn24Ho_tjcrQCUECU");
    Geocode.fromLatLng(String(value.coords.latitude), String(value.coords.longitude)).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
        form.setFieldsValue({ startPosition_text: address })
      },
      error => {
        console.error(error);
      }
    );

    if (value) {
      this.setState({
        currentPosition: {
          lat: value.coords.latitude,
          lon: value.coords.longitude,
          accuracy: value.coords.accuracy
        }
      }, () => {

        form.setFieldsValue({ startPosition: String(value.coords.latitude) + ',' + String(value.coords.longitude) })
      })
    }
  }

  optimize = () => {
    const { form } = this.props
    const { additionalPlaces } = this.state

    form.validateFields((err, values) => {

      const DirectionsService = new google.maps.DirectionsService();
      let wayPoints = []
      additionalPlaces.forEach(item => {

        const obj = new google.maps.LatLng(Number(values['place_' + String(item.id)].split(',')[0]), Number(values['place_' + String(item.id)].split(',')[1]))
        wayPoints.push(
          {
            location: obj,
            stopover: true,
          })
      })
      console.log(wayPoints, new google.maps.LatLng(Number(values['startPosition'].split(',')[0]), Number(values['startPosition'].split(',')[1])))
      DirectionsService.route({
        origin: new google.maps.LatLng(Number(values['startPosition'].split(',')[0]), Number(values['startPosition'].split(',')[1])),
        destination: new google.maps.LatLng(Number(values['destination'].split(',')[0]), Number(values['destination'].split(',')[1])),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: wayPoints
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          }, () => {
            console.log(result)
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
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
      })
    } else {
      message.error('Only two way points can be added!!')
    }
  }

  removePlaces = (position) => {
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
      })
    }
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
    const { additionalPlaces, destination_address, startPosition_address } = this.state
    const start_autoComplete = <PlacesAutocomplete
      value={startPosition_address}
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
                {getFieldDecorator('place_' + String(item.id))(
                  <PlacesAutocomplete
                    value={startPosition_address}
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
                )}
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
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((value) => (this.getCurrentLocation(value)));
                  } else {
                    alert("Could not get the location info.");
                  }
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

  render() {
    const { form: { getFieldDecorator } } = this.props
    const staticOptions = [
      { title: 'Library', value: 'Library' },
      { title: 'Museum', value: 'Museum' },
      { title: 'Coffee Shop', value: 'Coffee Shop' }
    ]

    const contentStyle = {
      width: '100%',
      color: '#fff',
      opacity: 0.3,
      textAlign: 'center',
      background: '#364d79',

    };

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

    return (
      <div id="map" className={styles.background} >

        <Carousel beforeChange={this.carouselChange} style={{ height: '20%', maxHeight: '290px' }}>
          <div className={styles.show_img_container}>
            <div style={imgTitleStyle}> Travel smarter by saving your time!</div>
            <div style={imgContentStyle}>
              Plan your routes in a simple way to avoid<br />
              spending more time in travelling.<br />
              Optimize your route by time or plan the route<br />
              in the same order as you entered.
            </div>
            <img src={img1} style={contentStyle} ></img>

          </div>
          <div className={styles.show_img_container}>
            <div style={imgTitleStyle}> Are you health conscious?</div>
            <div style={imgContentStyle}>
              We take care of your health too.<br />
Check the number of calories burned while <br />
you were travelling.
            </div>
            <img src={img2} style={contentStyle} ></img>
          </div>
          <div className={styles.show_img_container}>
            <div style={imgTitleStyle}> Feeling unsafe in dark?</div>
            <div style={imgContentStyle}>
              We will help you get to a place where you feel safe.<br />
Find a well-lighted route near you using our website.<br />
Check out the number of people near you.
            </div>
            <img src={img3} style={contentStyle} ></img>
          </div>
        </Carousel>


        <Card style={{ padding: 20, display: '' }} hoverable>
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
                    getFieldDecorator('secondType')(
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
                    getFieldDecorator('thirdType')(
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

            </Row>



            {/* <this.PlaceDetailsComponent></this.PlaceDetailsComponent> */}
          </Form>

        </Card>
        <Row>
          <Col span={24}>
            <Card style={{ padding: 0 }} title={'PLAN'} bordered hoverable headStyle={{ background: '#364d79', color: '#fff' }}>
              <Row gutter={[10, 10]} justify={'end'}>
                {
                  this.state.mapIsLoad && this.constructSeriesPlacesBar()
                }

                <Col style={{ textAlign: 'right' }}>
                  {this.state.mapIsLoad && <Button style={{ background: '#364d79', color: '#fff' }} onClick={this.optimize}>
                    Optimize
                    </Button>}
                </Col>

              </Row>



            </Card>
          </Col>
          <Col span={24}>
            <Card style={{ padding: 20 }} hoverable>
              <div className={styles.mapContainer}>
                <MyComponent directions={this.state.directions} markers={this.markerRender.bind(this)} startPoint={this.state.defaultPosition || null} getMapStatus={this.getMapStatus.bind(this)}></MyComponent>
                <div className={styles.mapLocateButton}>
                  {this.state.mapIsLoad && <Button
                    type="default"
                    size='large'
                    icon={'environment'}
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((value) => (this.getCurrentLocation(value)));
                      } else {
                        alert("Could not get the location info.");
                      }
                    }}></Button>}

                </div>

              </div>

            </Card>
          </Col>

        </Row>



        <div>







        </div>

      </div>
    );
  }
}


