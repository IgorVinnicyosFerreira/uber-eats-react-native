import styled from 'styled-components/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const BannerCarousel = styled(Carousel).attrs({
  sliderWidth: wp('100%'),
  itemWidth: wp('100%'),
})``;

export const Image = styled.Image`
  width: ${wp('100%')}px;
  height: ${hp('27.5%')}px;
  resize-mode: cover;
`;
