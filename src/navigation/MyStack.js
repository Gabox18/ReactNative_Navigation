import { createStackNavigator } from '@react-navigation/stack'
import Settings from '../screens/Settings'
import MyBottomTab from './MyBottomTab'
import Onboarding from '../screens/Onboarding'

const HomeStack = createStackNavigator()
const myconfig = {
	headerShown: false,
	// title: 'something',
	headerTitleAlign: 'center',
	presentation: 'modal',
	gestureEnabled: true,
}

export default function MyStack() {
	return (
		<HomeStack.Navigator initialRouteName='Home' screenOptions={myconfig}>
			<HomeStack.Screen name='inicio' component={MyBottomTab} />
			<HomeStack.Group screenOptions={{ headerShown: true }}>
				<HomeStack.Screen
					name='Settings'
					component={Settings}
					options={{ headerBackTitle: 'casa' }}
				/>
				<HomeStack.Screen
					name='Onboarding'
					component={Onboarding}
					options={{ headerShown: false }}
				/>
			</HomeStack.Group>
		</HomeStack.Navigator>
	)
}
