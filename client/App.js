import React from 'react';
import { View, Text } from 'react-native';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationPage from './src/pages/BottomNavigationLayoutPage';
import DailyQuestPage from './src/pages/DailyQuestPage';
import AnalysisPage from './src/pages/AnalysisPage';
import MapleInfoPage from './src/pages/MapleInfoPage';
import UnionLinkPage from './src/pages/UnionLinkPage';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     accent: 'yellow',
//   },
// };

const Stack = createStackNavigator();

const App = () => {
  return (
    // <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="NavigationTab" component={NavigationPage} />
        <Stack.Screen name="DailyQuest" component={DailyQuestPage} />
        <Stack.Screen name="Analysis" component={AnalysisPage} />
        <Stack.Screen name="MapleInfo" component={MapleInfoPage} />
        <Stack.Screen name="UnionLink" component={UnionLinkPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // </PaperProvider>
  );
};

export default App;
