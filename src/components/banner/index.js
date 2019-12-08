import React, {Component} from 'react';

import {BannerCarousel, Image} from './styles';
import {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View} from 'react-native';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    const bannersList = [
      require('../../assets/images/banners/banner-2.jpg'),
      require('../../assets/images/banners/banner-1.jpg'),
    ];

    this.state = {
      bannersList,
      activeIndex: 0,
    };
  }
  renderItem = ({item}) => {
    return <Image source={item} />;
  };

  pagination() {
    return (
      <Pagination
        dotsLength={this.state.bannersList.length}
        activeDotIndex={this.state.activeIndex}
        containerStyle={{
          paddingVertical: 0,
          height: hp('2%'),
          width: wp('11%'),
          position: 'absolute',
          top: '87%',
          alignSelf: 'center',
        }}
        dotStyle={{
          width: hp('1.5%'),
          height: hp('1.5%'),
          borderRadius: hp('1.5%') / 2,
          marginHorizontal: wp('1%'),
          backgroundColor: '#fff',
        }}
        inactiveDotStyle={{
          width: hp('1.5%'),
          height: hp('1.5%'),
          borderRadius: hp('1.5%') / 2,
          marginHorizontal: wp('1%'),
          backgroundColor: '#00000000',
          borderColor: '#fff',
          borderWidth: hp('0.2%'),
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }
  render() {
    return (
      <View>
        <BannerCarousel
          data={this.state.bannersList}
          renderItem={this.renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
        {this.pagination()}
      </View>
    );
  }
}
