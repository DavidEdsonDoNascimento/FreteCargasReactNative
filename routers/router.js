import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LoginPage} from '../src/pages/Login';
import {HomePage} from '../src/pages/Home';
import {DetalhesPage} from '../src/pages/Detalhes';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Login',
      },
    },
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
      },
    },
    Detalhes: {
      screen: DetalhesPage,
      navigationOptions: {
        title: 'Detalhes',
      },
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1565c0',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export const Router = createAppContainer(AppNavigator);
