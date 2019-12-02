import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('37%')}px;
  width: ${wp('65%')}px;
  margin-vertical: ${hp('2%')}px;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  height: ${hp('8%')}px;
  width: ${hp('8%')}px;
  border-radius: ${hp('8%') / 2}px;
  border: 1px;
  border-color: #ccc;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled(Icon).attrs({name: 'arrow-right'})`
  font-size: ${hp('3.5%')};
  color: #5f9909;
`;

export const Text = styled.Text`
  font-family: Helvetica;
  font-size: ${hp('2.5%')};
  color: #5f9909;
  margin-top: ${hp('2%')};
`;
