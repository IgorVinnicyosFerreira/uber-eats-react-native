import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Container = styled.View`
  margin-vertical: ${hp('2%')}px;
`;

export const First = styled(Container)`
  margin-left: ${wp('6%')}px;
  margin-right: ${wp('2%')}px;
`;

export const Last = styled(Container)`
  margin-left: ${wp('2%')}px;
  margin-right: ${wp('6%')}px;
`;

export const BetweenCards = styled(Container)`
  margin-left: ${wp('2%')}px;
  margin-right: ${wp('2%')}px;
`;
