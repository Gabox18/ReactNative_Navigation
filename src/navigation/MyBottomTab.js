import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const MyTab = createBottomTabNavigator()

const MyBottomTab = () => {
	return (
		<MyTab.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerTitleAlign: 'center',
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: 'lightblue',
				},
			}}
		>
			<MyTab.Screen
				name='home'
				component={Home}
				options={{
					tabBarIcon: () => {
						;<Entypo name='home' size={24} color='white' />
					},
					tabBarIconStyle: {
						position: 'absolute',
						color: 'black',
						backgroundColor: 'white',
						tintColor: ' red',
					},
				}}
			/>
			<MyTab.Screen
				name='Perfil'
				component={Profile}
				options={{
					tabBarBadge: 3,
					tabBarIcon: ({ color }) => {
						;<FontAwesome name='user' size={24} color={color} />
					},
				}}
			/>
		</MyTab.Navigator>
	)
}

export default MyBottomTab
