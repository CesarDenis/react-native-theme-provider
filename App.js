import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeContextProvider } from './src/core/themeProvider';
import AppNavigator from './src/routes/AppNavigator';

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
