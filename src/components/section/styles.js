import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const marginLeft = wp('6%');
export const Container = styled.View`
  width: ${wp('100%')}px;
  background-color: #fff;
  padding-top: ${hp('3%')}px;
  padding-bottom: ${hp('5%')}px;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: ${hp('2.8%')};
  color: #000;
  margin-left: ${marginLeft}px;
  margin-bottom: ${hp('0.6%')}px;
`;

export const Subtitle = styled(Title)`
  font-family: Helvetica;
  font-size: ${hp('2.1%')};
  margin-bottom: ${hp('2%')}px;
  color: #272727;
  opacity: 0.6;
`;
