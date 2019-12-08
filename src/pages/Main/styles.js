import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #ebebeb;
  justify-content: flex-start;
`;

export const ArrowIcon = styled(Icon).attrs({name: 'arrow-right'})`
  color: #000;
  font-size: ${hp('1.9%')};
  margin-horizontal: ${wp('2%')}px;
`;

export const DropdownIcon = styled(ArrowIcon).attrs({
  name: 'arrow-down-drop-circle-outline',
})`
  font-size: ${hp('2.8%')};
`;

export const MarginContainer = styled.View`
  padding-left: ${wp('4%')}px;
`;
