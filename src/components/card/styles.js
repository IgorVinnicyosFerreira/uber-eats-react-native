import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${wp('20%')}px;
  width: ${hp('60%')}px;
  justify-content: space-between;
  padding: ${hp('1%')}px;
  background-color: 'white';
  shadow-color: '#000';
  shadow-offset: 0 2;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;
