import React from 'react';
import styles from './index.css';
import { Button, Tabs } from 'antd'
import Travel from '@/pages/map'

import logo from '@/assets/yay.jpg'

const { TabPane } = Tabs
class BasicLayout extends React.PureComponent {


  state = {
    pageNum: '1',
  }

  changeNavigator = (num) => {
    this.setState({
      pageNum: num
    },()=>{
      console.log(num)
    })
  }

  render() {

    return (
      <div className={styles.normal}>
        <div className={styles.header}>

          <img src={logo} className={styles.logo_header} />


          <h1 className={styles.title}>
            Travel Smarter in Melbourne!
          </h1>



        </div>
        <Tabs className={styles.navigator} onChange={(value) => { this.changeNavigator(value) }}>
          <TabPane tab="Travel" key={'1'}>

          </TabPane>
          <TabPane tab="About US" key={'2'}>

          </TabPane>

        </Tabs>


        {this.state.pageNum==='1'?<Travel></Travel>:null}
        {this.state.pageNum==='2'?<Travel></Travel>:null}
        <div id={'footer'} className={styles.footer_Tabs_background}></div>
      </div>
    );
  }
}

// const BasicLayout: React.FC = props => {

// };

export default BasicLayout;
