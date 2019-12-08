import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Animated} from 'react-native';
export const Container = styled(Animated.View).attrs(props => {
  return {
    style: {
      transform: props.style.transform,
    },
  };
})`
  width: ${wp('100%')}px;
  position: absolute;
  top: ${hp('8%')}px;
  height: ${hp('7.5%')}px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${wp('5.5%')}px;
  padding-right: ${wp('1.5%')}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const Tag = styled.View`
  height: ${hp('4.6%')}px;
  border-radius: ${hp('2.5%')}px;
  padding-vertical: ${hp('1.2%')}px;
  padding-horizontal: ${hp('1.7%')}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

export const Text = styled.Text`
  font-family: Helvetica-Bold;
  font-size: ${hp('2.1%')};
  color: #000;
`;

export const ChevronDown = styled(Icon).attrs({name: 'chevron-down'})`
  font-size: ${hp('2%')};
  margin-left: ${wp('1%')};
  color: #000;
`;

export const Settings = styled(Icon).attrs({name: 'tune'})`
  font-size: ${hp('3%')};
  color: #000;
`;
