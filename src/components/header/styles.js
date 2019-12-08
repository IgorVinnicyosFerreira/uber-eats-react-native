import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Platform} from 'react-native';
export const Container = styled.View`
  height: ${Platform.select({ios: hp('8%') + 20, android: hp('8%')})}px;
  width: ${wp('100%')}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-horizontal: ${wp('4%')}px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.29;
  shadow-radius: 4.65;
  elevation: 7;
`;

export const HeaderText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: ${hp('2.1%')}px;
  color: #000;
`;
