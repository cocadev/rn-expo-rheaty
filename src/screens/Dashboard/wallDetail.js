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

    return (
      <View style={i.container}>
        <Header2 />
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