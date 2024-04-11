import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import MyTopTap from './MyTopTap.js'

const MyTab = createBottomTabNavigator()

const MyBottomTab = () => {
	return (
		<MyTab.Navigator
			initialRouteName='TopTap'
			screenOptions={{
				headerTitleAlign: 'center',
				// tabBarStyle: {
				// 	position: 'absolute',
				// 	backgroundColor: 'lightblue',
				// },
			}}
		>
			<MyTab.Screen
				name='TopTap'
				component={MyTopTap}
				options={{
					headerShown: '',
					headerLeft: () => {
						;<Pressable onPress={() => navigation.openDrawer()}>
							;
							<FontAwesome
								name='user'
								size={50}
								color={'black'}
								style={{ marginLeft: 15 }}
							/>
						</Pressable>
					},
					tabBarIcon: () => {
						return <FontAwesome name='home' size={30} color='red' />
					},
				}}
			/>
			<MyTab.Screen
				name='Perfil'
				component={Profile}
				options={{
					tabBarBadge: 3,
					tabBarIcon: ({ color }) => {
						return <FontAwesome name='user' size={24} color='red' />
					},
				}}
			/>
		</MyTab.Navigator>
	)
}

export default MyBottomTab
