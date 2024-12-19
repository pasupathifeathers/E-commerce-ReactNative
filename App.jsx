import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import Search from './src/screens/Search';
import Notification from './src/screens/Notification';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Categories from './src/screens/Categories';
import TodayTrend from './src/screens/TodayTrend';
import TodayDeals from './src/screens/TodayDeals';
import CategoriesProduct from './src/screens/CategoriesProduct';
import {SafeAreaView} from 'react-native-safe-area-context';
import Product from './src/screens/Product';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Bot = () => {
  const tabScreens = [
    {
      name: 'Home',
      component: Home,
      icon: 'home',
    },
    {
      name: 'Search',
      component: Search,
      icon: 'search1',
    },
    {
      name: 'Notification',
      component: Notification,
      icon: 'hearto',
    },
    {
      name: 'Cart',
      component: Cart,
      icon: 'shoppingcart',
    },
    {
      name: 'Profile',
      component: Profile,
      icon: 'user',
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#42f44b',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      {tabScreens.map(({name, component, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({color, size}) => (
              <AntDesign name={icon} size={size} color={'#000'} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const App = () => {
  const stackScreens = [
    {name: 'Tab', component: Bot},
    {name: 'Category', component: Categories},
    {name: 'TodayTrend', component: TodayTrend},
    {name: 'Products', component: Products},
    {name: 'TodayDeals', component: TodayDeals},
    {name: 'profile', component: Profile},
    {name: 'CategoryProducts', component: CategoriesProduct},
    {name: 'product', component: Product},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tab"
          screenOptions={{headerShown: false}}>
          {stackScreens.map(({name, component}) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
