import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const { store, persistor } = createStore()
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black',
        accent: '#f1c40f',
        text:'black',
        placeholder:'#cccccc'
    },
};
const App = () => (
  /**
   * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
   */
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
    <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>

        <RootScreen />
        </PaperProvider>
    </PersistGate>
  </Provider>
)

export default App

