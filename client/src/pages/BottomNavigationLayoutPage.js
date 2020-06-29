import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DailyQuestPage from './DailyQuestPage';
import AnalysisPage from './AnalysisPage';
import MapleInfoPage from './MapleInfoPage';
import UnionLinkPage from './UnionLinkPage';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationLayoutPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="DailyQuest"
      barStyle={{ backgroundColor: '#fec89a' }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        showLabel: true,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'DailyQuest') {
            iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline';
          } else if (route.name === 'Analysis') {
            iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
          } else if (route.name === 'MapleInfo') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'UnionLink') {
            iconName = focused ? 'ios-attach' : 'ios-attach-outline';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="DailyQuest" component={DailyQuestPage} />
      <Tab.Screen name="Analysis" component={AnalysisPage} />
      <Tab.Screen name="MapleInfo" component={MapleInfoPage} />
      <Tab.Screen name="UnionLink" component={UnionLinkPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigationLayoutPage;
