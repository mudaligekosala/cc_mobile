import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppoinmentScreen from "../features/AllAppoinment/AllAppoinment";
import ReportScreen from "../features/Report/Report";
import InventoryScreen from "../features/Inventory/Inventory";
import DealScreen from "../features/Deals/Deals";
import AuthScreen from '../features/Auth/Auth';
import ComfirmUserScreen from '../features/Auth/comfirmUser';
//navigation
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

//auth stack
const AuthStack = createStackNavigator({
  screen: AuthScreen,
  ComfirmUser:{
    screen: ComfirmUserScreen

  }
},{
  navigationOptions:{
    header:null
  }
})

//report stack
const ReportStack = createStackNavigator(
  {
    screen: ReportScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

//appoinment stack
const AppoinementStack = createStackNavigator(
  {
    screen: AppoinmentScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

//inventory stack
const InventoryStack = createStackNavigator(
  {
    screen: InventoryScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

//deal stack
const DealStack = createStackNavigator(
  {
    screen: DealScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

//tabbar
const Tab = createBottomTabNavigator({
  Home: {
    screen: AppoinementStack,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor})=>(
            <Icon
                name="home"
                color={tintColor}
                size={24}
            />
        )
    })
  },
  Report: {
    screen: ReportStack,
    navigationOptions: ()=>({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name='pie-chart'
                color={tintColor}
                size={24}
            />
        )
    })
  },
  Inventory: {
    screen: InventoryStack,
    navigationOptions: ()=>({
        tabBarIcon : ({tintColor}) => (
            <Icon
                name='assignment'
                color={tintColor}
                size={24}
            />
        )
    })
  },
  Deal: {
    screen: DealStack,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name='attach-money'
                color={tintColor}
                size={24}
            />
        )
    })
  }
},
{
    tabBarOptions:{
        showLabel:false,
        activeTintColor:'green',
        inactiveTintColor:'gray',
        style:{
            backgroundColor:'black'
        }
    }
}
);

//switch stack
const SwitchStack = createSwitchNavigator({
  Auth:{
    screen:AuthStack
  },
  TabScreen:{
    screen:Tab
  }
  
})

export default SwitchStack;
