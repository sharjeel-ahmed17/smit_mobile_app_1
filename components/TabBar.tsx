import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Add proper type annotations for props if possible
type TabBarProps = {
  state: {
    index: number;
    routes: Array<{
      key: string;
      name: string;
      params?: object;
    }>;
  };
  descriptors: {
    [key: string]: {
      options: {
        tabBarLabel?: string;
        title?: string;
        tabBarAccessibilityLabel?: string;
        tabBarButtonTestID?: string;
      };
    };
  };
  navigation: {
    navigate: (name: string, params?: object) => void;
    emit: (event: { type: string; target: string; canPreventDefault?: boolean }) => {
      defaultPrevented: boolean;
    };
  };
};

const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  // Placeholder colors (replace with your theme)
  const colors = {
    primary: '#007bff',
    text: '#000',
  };



  return (
    <View style={style.tabBar}>
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
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
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
            key={route.key} // Ensure unique key for each route
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.tabItem}
          >
            <Text style={style.tabText}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
const style = StyleSheet.create({
    tabBar: {
        position : 'absolute',
        bottom:25 , 
        flexDirection : 'row',
        backgroundColor : '#fff',
        marginHorizontal  : 20, 
        paddingVertical : 15, 
        borderRadius : 25,
        borderCurve : 'continuous',
       justifyContent : 'space-between',
       alignItems : 'center',
    //    width : '100%'
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap : 4
    },
    tabText: {
        fontSize: 12,
        color: '#000',
    },
    tabTextFocused: {
        color: '#007bff',
    },
})