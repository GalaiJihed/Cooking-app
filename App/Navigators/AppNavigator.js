import { createAppContainer, createStackNavigator } from 'react-navigation'

import DeepLinkingScreen from 'App/Containers/DeepLinking/DeepLinkingScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import Signin from 'App/Containers/Signin/Signin'
import Clients from "App/Containers/Clients/Clients";
import StepsIndicator from "../Containers/StepsIndicator/StepsIndicator";
import Signup from "../Containers/Signup/index";
import HomeScreen from "../Containers/Home/HomeScreen";
import RecipeScreen from "../Containers/Recipe/RecipeScreen";
import IngredientScreen from "../Containers/Ingredient/IngredientScreen";
import IngredientsDetailsScreen from "../Containers/IngredientsDetails/IngredientsDetailsScreen";

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const StackNavigator = createStackNavigator(
	{
		// Create the application routes here (the key is the route name, the value is the target screen)
		// See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
		SplashScreen: SplashScreen,
		// The main application screen is our "ExampleScreen". Feel free to replace it with your
		// own screen and remove the example.
		SigninScreen: Signin,
		Recipe:RecipeScreen,
		//Client Screen
		DeepLinkingScreen: {
			screen: DeepLinkingScreen,
			path: 'deeplink',
		},
		ClientsScreen:Clients,
		StepsIndicator : StepsIndicator,
		Signup: Signup,
		HomeScreen:HomeScreen,
		IngredientsDetails:IngredientsDetailsScreen,

	},

	{
		// By default the application will show the splash screen
		initialRouteName: 'SplashScreen',
		// See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig

	}
)




export default createAppContainer(StackNavigator)

console.disableYellowBox = true;
