import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from 'react-native-platform-touchable';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('38%')}px;
  width: ${wp('80%')}px;
  justify-content: flex-start;
  padding: ${hp('1%')}px;
  border-radius: ${hp('0.5%')}px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const FoodContainer = styled(Container)`
  height: ${hp('36%')}px;
  width: ${wp('71%')}px;
`;
export const LargerContainer = styled(Container)`
  height: ${hp('40%')}px;
  width: ${wp('96%')}px;
`;
export const LargerContainerWithoutElevation = styled(LargerContainer)`
  shadow-color: #00000000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0;
  shadow-radius: 0;
  elevation: 0;
`;

export const DescriptionContainer = styled.View`
  height: 30%;
  margin-top: ${hp('2.5%')}px;
  justify-content: space-between;
  width: 100%;
  padding-horizontal: ${wp('2.8%')}px;
`;

export const Image = styled.Image`
  height: 58%;
  width: 100%;
  resize-mode: cover;
  border-radius: ${hp('0.5%')}px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: ${hp('2.2%')};
  color: #272727;
  font-weight: 100;
  margin-bottom: ${hp('0.5%')}px;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  margin-top: ${hp('1%')}px;
`;

export const Tag = styled.View`
  height: ${hp('3.4%')}px;
  flex-direction: row;
  border-radius: ${hp('0.3%')}px;
  padding-horizontal: ${wp('2%')}px;
  padding-vertical: ${hp('0.5%')}px;
  margin-right: ${wp('2.5%')}px;
  align-items: center;
  background-color: #f6f6f6;
`;

export const TagText = styled(Title)`
  opacity: 0.8;
  font-size: ${hp('1.9%')}px;
`;

export const Star = styled(Icon).attrs(props => ({
  name: 'star',
}))`
  color: #ffc552;
  font-size: ${hp('2.7%')}px;
`;

export const CircleSmall = styled(Icon).attrs(props => ({
  name: 'circle-small',
}))`
  color: #272727;
  opacity: 0.6;
  font-size: ${hp('2%')}px;
  margin-horizontal: -${wp('0.7%')}px;
`;

export const InfoText = styled(TagText)`
  margin-top: ${hp('0.5%')}px;
  opacity: 0.6;
`;

export const InfoContainer = styled(TagContainer)`
  align-items: center;
  margin-top: 0px;
`;

export const CategoryContainer = styled(TagContainer)`
  align-items: center;
  margin-top: 0px;
`;
