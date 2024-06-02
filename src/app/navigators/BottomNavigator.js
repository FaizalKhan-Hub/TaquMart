import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/home/HomeScreen';
import Categories from '../screens/dashboard/Categories';
import Cart from '../screens/dashboard/Cart';
import Profile from '../screens/dashboard/profile/Profile';
import VectorIcon from '../utils/vectorIcons';
import {colors, font, hp, pixel} from '../utils';

const BottomTab = createBottomTabNavigator();

const screenOptions = {
  tabBarLabelStyle: {...font(400, 14), marginBottom: hp(2)},
  headerShown: false,
  tabBarStyle: {
    height: hp(60),
    paddingVertical: pixel(10),
    marginBottom: hp(2),
  },
};

const createScreenOptions = (
  name,
  iconName,
  isMaterialCommunityIcon = false,
) => ({
  tabBarIcon: ({focused}) => (
    <VectorIcon
      name={iconName}
      isMaterialCommunityIcon={isMaterialCommunityIcon}
      style={{
        fontSize: pixel(30),
        color: focused ? colors.primaryColor : 'black',
      }}
    />
  ),
});

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={createScreenOptions('Home', 'home', true)}
      />
      <BottomTab.Screen
        name="Categories"
        component={Categories}
        options={createScreenOptions('Categories', 'category')}
      />
      <BottomTab.Screen
        name="Bag"
        component={Cart}
        options={createScreenOptions('Bag', 'cart', true)}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={createScreenOptions('Profile', 'person')}
      />
    </BottomTab.Navigator>
  );
}
