import React, { useEffect } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { Helpers } from 'App/Theme'
import { useDispatch } from 'react-redux'

const RootScreen = () => {
  // Deep linking prefix
  const prefix = 'boilerplate://';



  return (
    <View style={Helpers.fill}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
        uriPrefix={prefix}
      />
    </View>
  )
}

export default RootScreen
