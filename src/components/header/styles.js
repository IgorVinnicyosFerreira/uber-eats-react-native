import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('8%')}px;
  width: ${wp('100%')}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-horizontal: ${wp('4%')}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const HeaderText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: ${hp('2.1%')}px;
  color: #000;
`;
