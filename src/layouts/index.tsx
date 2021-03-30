import React from 'react';
import styles from './index.css';
import { Button, Tabs, Row, Col } from 'antd'
import Travel from '@/pages/map'

import logo from '@/assets/logo.png'

const { TabPane } = Tabs
class BasicLayout extends React.PureComponent {


  state = {
    pageNum: '1',
  }

  changeNavigator = (num) => {
    this.setState({
      pageNum: num
    }, () => {
      console.log(num)
    })
  }

  render() {

    return (
      <div className={styles.normal}>
        <div className={styles.header}>
          <Row type="flex" justify="start" align="middle">
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <img src={logo} className={styles.logo_header} />
            </Col>
            <Col xs={16} sm={8} md={8} lg={8} xl={8}>
              <h1 className={styles.title}>
                Travel Smarter in Melbourne <br></br>
                
          </h1>
          <h2 className={styles.title}>without a car</h2>
            </Col>
          </Row>







        </div>
        <Tabs className={styles.navigator} onChange={(value) => { this.changeNavigator(value) }}>
          <TabPane tab="Travel" key={'1'}>

          </TabPane>
          {/* <TabPane tab="About US" key={'2'}>

          </TabPane> */}

        </Tabs>


        {this.state.pageNum === '1' ? <Travel></Travel> : null}
        {this.state.pageNum === '2' ? <Travel></Travel> : null}
        <div id={'footer'} className={styles.footer_Tabs_background}></div>
      </div>
    );
  }
}

// const BasicLayout: React.FC = props => {

// };

export default BasicLayout;
