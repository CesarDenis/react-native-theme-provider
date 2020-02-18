import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { withTheme } from '../core/themeProvider';

function SettingScreens({ themes, theme, setTheme }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => setTheme(item.key)}>
        <View
          style={[
            style.itemContainer,
            {
              backgroundColor: item.backgroundColor,
            },
          ]}>
          <Text style={[style.itemText, { color: item.color }]}>{item.key}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      style={style.container}
      ListHeaderComponent={
        <Text style={[style.headline, { color: theme.backgroundColor }]}>Choose your theme:</Text>
      }
      data={themes}
      renderItem={renderItem}
    />
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '400',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default withTheme(SettingScreens);
