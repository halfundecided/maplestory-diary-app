import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationPage from './src/pages/BottomNavigationLayoutPage';

import DailyQuestPage from './src/pages/DailyQuestPage/DailyQuestPage';

import AnalysisPage from './src/pages/AnalysisPage/AnalysisPage';

import MapleInfoPage from './src/pages/MapleInfoPage/MapleInfoPage';
import EventPost1 from './src/pages/MapleInfoPage/EventPost1';
import CashUpdatePost1 from './src/pages/MapleInfoPage/CashUpdatePost1';
import CashUpdatePost2 from './src/pages/MapleInfoPage/CashUpdatePost2';
import CashUpdatePost3 from './src/pages/MapleInfoPage/CashUpdatePost3';

import UnionLinkPage from './src/pages/UnionLinkPage/UnionLinkPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NavigationTab" component={NavigationPage} />
        <Stack.Screen name="DailyQuest" component={DailyQuestPage} />
        <Stack.Screen name="Analysis" component={AnalysisPage} />
        <Stack.Screen name="MapleInfo" component={MapleInfoPage} />
        <Stack.Screen name="EventPost1" component={EventPost1} />
        <Stack.Screen name="CashUpdatePost1" component={CashUpdatePost1} />
        <Stack.Screen name="CashUpdatePost2" component={CashUpdatePost2} />
        <Stack.Screen name="CashUpdatePost3" component={CashUpdatePost3} />
        <Stack.Screen name="UnionLink" component={UnionLinkPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
