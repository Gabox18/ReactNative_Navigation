import { createStackNavigator } from '@react-navigation/stack'
import Settings from '../screens/Settings'
import MyBottomTab from './MyBottomTab'

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
					options={{
						// title: 'optiones',
						headerBackTitle: 'casa',
					}}
				/>
			</HomeStack.Group>
		</HomeStack.Navigator>
	)
}
