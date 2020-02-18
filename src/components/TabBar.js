import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

import { withTheme } from '../core/themeProvider';

const DEFAULT_TABBAR_HEIGHT = 50;

function TabBar({ state, descriptors, navigation, theme }) {
  return (
    <SafeAreaConsumer>
      {insets => (
        <View
          style={[
            style.tabBar,
            {
              height: DEFAULT_TABBAR_HEIGHT + (insets ? insets.bottom : 0),
              paddingBottom: insets ? insets.bottom : 0,
            },
          ]}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={route.key}
                testID={options.tabBarTestID}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                onLongPress={onLongPress}
                style={style.tab}>
                <Text style={[style.label, { color: isFocused ? theme.backgroundColor : '#999' }]}>
                  {label.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </SafeAreaConsumer>
  );
}

const style = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default withTheme(TabBar);
