import React from 'react';
import styles from './index.css';
import { Button, Tabs, Row, Col, Menu } from 'antd'
import Travel from '@/pages/map'
import Home from '@/pages/home'
import About from '@/pages/about'
import Login from '@/pages/login'
import Benefits from '@/pages/benefits'
import POI from '@/pages/poi'
import { MailOutlined, AppstoreOutlined, SettingOutlined ,MenuUnfoldOutlined,MailTwoTone} from '@ant-design/icons';
import logo from '@/assets/logo_final.png'
import footerImg from '@/assets/background_footer.jpg'
import RoadSafety from '@/pages/roadSafety';
const { SubMenu } = Menu;
const { TabPane } = Tabs
class BasicLayout extends React.PureComponent {


  state = {
    pageNum: '1',
    current: 'home',
    validated: false
  }

  getValidation=(validated)=>{
if(validated){
  this.setState({
    validated:validated
  })
}
  }

  changeCurrent = (current) =>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.setState({ current:current},()=>{
     
    });
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  changeNavigator = (num) => {
    this.setState({
      pageNum: num
    }, () => {
      console.log(num)
    })
  }

  render() {
    const { current } = this.state;
    return (
      <div className={styles.normal}>
        { this.state.validated?<>
          <div className={styles.header}>
          <Row type="flex" justify="start" align="middle">
            <Col xs={15} sm={11} md={11} lg={11} xl={8}>
              <img src={logo} className={styles.logo_header} onClick={()=>{this.changeCurrent('home')}}/>
            </Col>
            <Col xs={0} sm={4} md={4} lg={4} xl={0}>
              {/* <h1 className={styles.title}>
                Travel Smarter in Melbourne <br></br>

              </h1>
              <h2 className={styles.title}>without a car</h2> */}
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={0}>
             
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={16}>
            <Row type="flex" justify="start" align="middle">
              <Col span={16}>
              <Menu style={{zIndex:9999}} overflowedIndicator={<MenuUnfoldOutlined />} className={styles.navigator} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                  
                  <Menu.Item key="home" onClick={()=>{this.changeCurrent("home")}} icon={<MailOutlined />}>
                    HOME
        </Menu.Item>
        <Menu.Item key="benefits" onClick={()=>{this.changeCurrent("benefits")}} icon={<AppstoreOutlined />}>
                    BENEFITS
        </Menu.Item>
        <Menu.Item key="poi" onClick={()=>{this.changeCurrent("poi")}} icon={<AppstoreOutlined />}>
                    POI
        </Menu.Item>
        <Menu.Item onClick={()=>{this.changeCurrent("travel")}} key="travel">
                   
                   TRAVEL
   
                 </Menu.Item>
                 <Menu.Item key="roadSafety" onClick={()=>{this.changeCurrent("roadSafety")}} icon={<AppstoreOutlined />}>
                    Road Safety
        </Menu.Item>
                  <Menu.Item key="about" onClick={()=>{this.changeCurrent("about")}} icon={<AppstoreOutlined />}>
                    ABOUT
        </Menu.Item>
        
                
                </Menu>
                
              </Col>
            </Row>
                
             
            </Col>
          </Row>


        </div>

        <Tabs style={{ display: 'none' }} className={styles.navigator} onChange={(value) => { this.changeNavigator(value) }}>
          <TabPane tab="Travel" key={'1'}>

          </TabPane>
          {/* <TabPane tab="About US" key={'2'}>

          </TabPane> */}

        </Tabs>

<div className={styles.content}> 
{this.state.current === 'travel' ? <Travel changeCurrent={this.changeCurrent.bind(this)}></Travel> : null}
{this.state.current === 'home' ? <Home changeCurrent={this.changeCurrent.bind(this)}></Home> : null}
{this.state.current === 'about' ? <About changeCurrent={this.changeCurrent.bind(this)}></About> : null}
{this.state.current === 'benefits'?<Benefits changeCurrent={this.changeCurrent.bind(this)}></Benefits>:null}
{this.state.current === 'poi'?<POI changeCurrent={this.changeCurrent.bind(this)}></POI>:null}
{this.state.current === 'roadSafety'?<RoadSafety changeCurrent={this.changeCurrent.bind(this)}></RoadSafety>:null}
</div>
        
        <div id={'footer'} className={styles.footer_Tabs_background}>

         <Row type={'flex'} justify={'center'} gutter={[20,20]}>
           <Col  xs={24} sm={24} md={24} lg={24} xl={8} style={{paddingTop:60,paddingLeft:30,textAlign:'left'}}>
              <h2 className={styles.footer_title}>ABOUT</h2>
              <p className={styles.footer_content}>
              Travel Smart Melbourne is an initiative to help people of Melbourne get aware of the importance of active travel. Active travel is much more than just health benefits or environmental stability. Through this platform, we educate, guide, and optimize their daily travels.  
              </p>
           </Col>
           <Col  xs={24} sm={24} md={24} lg={12} xl={4} style={{paddingTop:60,paddingLeft:30,textAlign:'left'}}>
           <h2 className={styles.footer_title}>QUICK LINKS</h2>
           <p className={styles.footer_content}>
             <a className={styles.footer_link} onClick={()=>{this.changeCurrent('home')}}>Home</a>
             <a className={styles.footer_link} onClick={()=>{this.changeCurrent('benefits')}}>Benefits</a>
             <a className={styles.footer_link} onClick={()=>{this.changeCurrent('poi')}}>POI</a>
             <a className={styles.footer_link} onClick={()=>{this.changeCurrent('travel')}}>Travel</a>
             <a className={styles.footer_link} onClick={()=>{this.changeCurrent('roadSafety')}}>Road Safety</a>
             <a className={styles.footer_link} onClick={()=>{this.changeCurrent('about')}}>About</a>
           
     
              </p>
           </Col>
           {/* <Col  xs={24} sm={24} md={24} lg={12} xl={8} style={{paddingTop:60,paddingLeft:30,textAlign:'left'}}>
           <h2 className={styles.footer_title}>CONTACT</h2>
           <div>
             <span>
             <MailTwoTone  style={{color:'#000000',fontSize:'18px'}}/>
             <a className={styles.footer_contact_link}>qjia0010@student.monash.edu</a>
             </span>
            
           </div>
           </Col> */}
         </Row>
        </div>
        </>:<Login getValidation={this.getValidation.bind(this)}/>
         
        }
      
      </div>
    );
  }
}

// const BasicLayout: React.FC = props => {

// };

export default BasicLayout;
