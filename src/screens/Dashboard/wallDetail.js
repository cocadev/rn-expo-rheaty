import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal, Dimensions, FlatList } from 'react-native';
import WallListItem from '../../components/WallListItem'
import i from '../../common/i'
import LottieScreen from '../../components/Lottie';
import api from "../../service/api";
import Header2 from '../../components/Header2';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import Cache from "../../utils/cache";
import { EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { PROFILE_PIC, SERVICELISTING } from '../../common/staticdata';
import UtilService from '../../utils/utils';
import { LinearGradient } from 'expo';
import MaterialTabs from 'react-native-material-tabs';
import GradientButton from '../../components/GradientButton';
import AvatarTag from '../../components/AvatarTag';
import text from '../../common/text';

const width = Dimensions.get('window').width

class WallDetail extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,

    }
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  _renderItem2 = ({ item }) => (
    <TouchableOpacity style={{ marginHorizontal: 5, borderRadius: 4 }}>

      <Image source={{ uri: item.image }} style={{ width: width / 3 - 18, height: width / 3 - 18, borderRadius: 4 }} />
      <Image source={{ uri: item.user }} style={styles.circle} />
      <Image source={images.icon_dank} style={styles.danks} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <Text style={i.smallText}>{item.title}</Text>
        <Image source={images.result} style={{ width: 20, height: 10 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={i.smallText}>Service 2</Text>
        <Text style={i.smallText}>$25/h</Text>
      </View>
    </TouchableOpacity>
  )

  render() {

    const { selectedTab } = this.state;

    return (
      <View style={i.container}>
        <Header2 />
        <ScrollView>

          <LinearGradient
            colors={['transparent', '#191919']}
            start={[1, 0.6]} end={[1, 1]}
            style={{ width: width, height: width / 2, zIndex: 1 }}>
          </LinearGradient>

          <Image source={images.img_demo} style={styles.img} />

          <View style={{ zIndex: 2 }}>
            <Image source={images.img_user2} style={styles.user} />
            <Image source={images.icon_dank} style={styles.dank} />

            <Image source={images.icon_like} style={[styles.like, { right: width / 40 }]} />
            <Image source={images.icon_share} style={styles.like} />

            <View style={styles.notice}>
              <Text style={{ color: '#fff', fontFamily: 'Montserrat-Medium', fontSize: 11 }}>Johnathan Doe</Text>
              <Text style={{ color: '#fff', fontFamily: 'Montserrat-Medium', fontSize: 11 }}>English | Espanol</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, marginBottom: 40 }}>
            <Text style={[i.normalText, { width: width / 1.4 }]}>Best Snow Cleaning Service lorem orem ipsum dolor sit amet.</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7, }}>

              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
                  <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
                  <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
                  <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
                  <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
                </View>
                <Text style={i.smallText}>S(115)</Text>
              </View>

              <View>
                <Text style={i.smallText}>PRICE</Text>
                <Text style={[i.normalText, { color: colors.RED, fontSize: 13, fontFamily: 'Montserrat-Bold' }]}>$25 / Hour</Text>
              </View>

            </View>

            <Text style={i.smallText}>I recently got an exercise on how to build a RESTful HTTP interface, and it intrigues me that I could try to build a temporary RESTful API to test the concept. Luckily, I am working on several projects that use Firebase Cloud Functions and Cloud Firestore. And it’s totally possible to create such endpoints for testing purposes or even a full working RESTful API project. Who knows?!</Text>

          </View>

          <View style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 12, marginTop: -40, }}>
              <View style={[styles.roundBtn, { backgroundColor: '#fff' }]}>
                <Text style={i.normalText}>CONTACT SELLER</Text>
              </View>
              <View style={styles.roundBtn}>
                <Text style={i.normalText}>ORDER NOW</Text>
              </View>
            </View>
            <Text style={{ color: colors.RED, fontSize: 10, fontFamily: 'Montserrat-MediumItalic', textAlign: 'right', marginTop: 12 }}>PLEASE CHECK AVAILABILITY</Text>
            <Text style={i.normalText}>CHECK AVAILABILITY</Text>
          </View>

          <ScrollView horizontal style={{ backgroundColor: '#fff', padding: 12 }}>
            <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center' }}>
              <View style={styles.input}>
                <Image source={images.icon_map} style={{ width: 12, height: 16 }} />
                <Text style={[i.smallText, { marginLeft: 5 }]}>35 fountain M2B1RS</Text>
                <Image source={images.icon_spot} style={{ width: 16, height: 16, marginLeft: 10 }} />

              </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.input}>
                <Image source={images.icon_calendar} style={{ width: 14, height: 15 }} />
                <Text style={[i.smallText, { marginLeft: 5 }]}>01/03/2019</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.input}>
                <Image source={images.icon_clock} style={{ width: 16, height: 16 }} />
                <Text style={[i.smallText, { marginLeft: 5 }]}>10:00 AM</Text>
              </View>
            </View>

          </ScrollView>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingBottom: 12 }}>
            <TouchableOpacity>
              <GradientButton title={'CHECK'}/>
            </TouchableOpacity>
          </View>
          <MaterialTabs
            items={['DETAILS', 'REVIEWS']}
            selectedIndex={this.state.selectedTab}
            onChange={this.setTab}
            barColor={colors.WHITE}
            indicatorColor={colors.GREEN}
            activeTextColor={colors.DARK}
            inactiveTextColor={colors.GREY3}
          />
          <View style={{ backgroundColor: '#fff', padding: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
              <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
              <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 1: </Text>
              <Text style={[i.smallText, { fontSize: 8 }]}>Lorem ipsum dolor sit amet. ex vero efficiendi hones.sit a</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
              <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
              <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 2: </Text>
              <Text style={[i.smallText, { fontSize: 8 }]}>So, in this project, I will use Firebase Cloud Functions </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
              <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
              <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 3: </Text>
              <Text style={[i.smallText, { fontSize: 8 }]}>That means you can take advantage of ES6+ when writing</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
              <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
              <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 4: </Text>
              <Text style={[i.smallText, { fontSize: 8 }]}>I will use this API to manage the contact information as a</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
              <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
              <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 5: </Text>
              <Text style={[i.smallText, { fontSize: 8 }]}>Initiate Firebase Hosting</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1 }}>
              <Image source={images.icon_star2} style={{ width: 9, height: 9, marginHorizontal: 3 }} />
              <Text style={[i.normalText, { fontSize: 9 }]}>Service Detail 6: </Text>
              <Text style={[i.smallText, { fontSize: 8 }]}></Text>
            </View>
          </View>

          <View >

            <View style={{ height: width / 4 }}></View>
            <View style={{ height: width / 3, backgroundColor: '#fff', borderBottomColor: colors.GREY4, borderBottomWidth: 2 }}></View>

            <View style={{ position: 'absolute', padding: 12, }}>
              <Text style={[i.normalText, { marginBottom: 12, marginLeft: 4 }]}>SIMILAR SERVICES</Text>
              <FlatList
                horizontal
                data={SERVICELISTING}
                keyExtractor={(item, i) => String(i)}
                renderItem={this._renderItem2}
                numColumns={1}
              />
            </View>

          </View>

          <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingHorizontal:12, paddingTop:10 }}>

            <View >
              <AvatarTag />
            </View>

            <View style={{paddingTop:6, paddingLeft:10}}>
              <Text style={{ color: colors.DARK, fontFamily: 'Montserrat-Medium', fontSize: 11 }}>Johnathan Doe</Text>
              <Text style={{ color: colors.DARK, fontFamily: 'Montserrat-Medium', fontSize: 11 }}>English | Espanol</Text>
            
            </View>

            <View style={{paddingTop:10, paddingLeft:10}}>
              <GradientButton title={'ORDER NOW'}/>
            </View>
          </View>

          <View style={{flexDirection:'row', backgroundColor:'#fff', paddingHorizontal:18, paddingBottom:12}}>
            <Image source={images.result} style={{ width: 32, height: 12 }} />
            <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
                 <Text style={text.m_8_dark2_b}>PRICE</Text>
                 <Text style={[text.m_9_red, {marginLeft:5}]}>$25 / Hour</Text>
              </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width,
    height: width / 2,
    position: 'absolute'
  },
  user: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    width: width / 5,
    height: width / 5,
    position: 'absolute',
    left: 20,
    bottom: 5
  },
  dank: {
    width: width / 24,
    height: width / 20,
    left: width / 5,
    bottom: 5
  },
  like: {
    width: width / 8,
    height: width / 8,
    right: width / 8,
    position: 'absolute',
    bottom: -5
  },
  notice: {
    left: width / 3.4,
    position: 'absolute',
    bottom: 27
  },
  input: {
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: colors.GREY3,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 4,
    marginRight: 12
  },
  roundBtn: {
    width: width / 2.4,
    height: width / 11,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    elevation: 2,
    // borderWidth:1,
    // borderColor:colors.GREY1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 16,
    position: 'absolute',
    left: 5,
    bottom: 25,
    borderColor: '#fff',
    borderWidth: 1
  },
  danks: {
    width: width / 30,
    height: width / 24,
    position: 'absolute',
    left: width / 9,
    bottom: 25,
  },
});

export default WallDetail;