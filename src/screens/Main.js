import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { withTheme } from '../core/themeProvider';

function MainScreens({ theme }) {
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>Theme</Text>
      <Text style={[style.themeText, { color: theme.color }]}>{theme.key}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  themeText: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default withTheme(MainScreens);
