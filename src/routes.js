import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search from './pages/search';
import Orders from './pages/orders';
import Account from './pages/account';
import Main from './pages/main';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TabBarButtom from './components/tabBarButtom';

const tabNavigator = createBottomTabNavigator(
  {
    Home: Main,
    Search: Search,
    Orders: Orders,
    Account: Account,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarButtonComponent: props => {
        console.log(props.style.flex);
        return <TabBarButtom {...props} />;
      },
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') iconName = 'home-variant';
        else if (routeName === 'Search') iconName = 'magnify';
        else if (routeName === 'Orders') iconName = 'clipboard-text';
        else if (routeName === 'Account') iconName = 'account';

        return <Icon name={iconName} size={32} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#CCCCCC',
      showLabel: false,
      style: {
        height: hp('8.7%'),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
        borderTopColor: 'white',
      },
    },
  },
);

const Routes = createAppContainer(tabNavigator);

export default Routes;
