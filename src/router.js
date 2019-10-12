import React, { PureComponent } from 'react'
import { default as SignIn } from './screens/Login/signIn'
import SignUp from './screens/Login/signup'
import Forgot from './screens/Login/forgot'

import { KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { Scene, Router, Drawer } from 'react-native-router-flux'
import * as Font from 'expo-font';

import SideMenu from './SideMenu';
import Wall from './screens/Dashboard/wall';
import Google from './screens/Login/google';

import WallDetail from './screens/Dashboard/wallDetail';
import Profile from './screens/Dashboard/Profile';
import Notification from './screens/Dashboard/Notification';
import Inbox from './screens/Dashboard/Inbox';
import Intro from './screens/Login/intro';

const width = Dimensions.get('window').width

export default class App extends PureComponent {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-BlackItalic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-BoldItalic': require('../assets/fonts/Montserrat-BoldItalic.ttf'),
      'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
      'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
      'Montserrat-ExtraLightItalic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
      'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-MediumItalic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-SemiBoldItalic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
      'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
      'Montserrat-ThinItalic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

      'ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      'material-community': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

    });
    console.log('fonts loaded!');
    this.setState({ fontLoaded: true });
  }
  render() {

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        {this.state.fontLoaded == true ?

          <Router>
            
            <Scene>
              <Scene key="walldetail" component={WallDetail} initial={false} hideNavBar/>
              <Scene key="intro" component={Intro} hideNavBar/>
              <Scene key="signin" component={SignIn} hideNavBar initial={false}/>
              <Scene key="signup" component={SignUp} hideNavBar initial={false}/>
              <Scene key="forgot" component={Forgot} initial={false} hideNavBar/>
              <Scene key="google" component={Google} initial={false} hideNavBar/>

              <Drawer
                hideNavBar
                initial={false}
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={width/1.2}
                drawerPosition="left"
              >

                <Scene key="wall" component={Wall} hideNavBar/>
                <Scene key="profile" component={Profile} initial={false} hideNavBar/>
                <Scene key="walldetail" component={WallDetail} initial={false} hideNavBar/>
                <Scene key="notification" component={Notification} initial={false} hideNavBar/>
                <Scene key="inbox" component={Inbox} initial={false} hideNavBar/>

              </Drawer>
            </Scene>
          </Router>
          : null}
      </KeyboardAvoidingView>
    );
  }
}
