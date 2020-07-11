import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DailyQuestPage from './DailyQuestPage/DailyQuestPage';
import AnalysisPage from './AnalysisPage/AnalysisPage';
import MapleInfoPage from './MapleInfoPage/MapleInfoPage';
import UnionLinkPage from './UnionLinkPage/UnionLinkPage';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationLayoutPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Daily Quest"
      barStyle={{ backgroundColor: '#fec89a' }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Daily Quest') {
            iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline';
          } else if (route.name === 'Analysis') {
            iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
          } else if (route.name === 'Maple Info') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Union') {
            iconName = focused ? 'ios-attach' : 'ios-attach-outline';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Daily Quest" component={DailyQuestPage} />
      <Tab.Screen name="Analysis" component={AnalysisPage} />
      <Tab.Screen name="Maple Info" component={MapleInfoPage} />
      <Tab.Screen name="Union" component={UnionLinkPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigationLayoutPage;
