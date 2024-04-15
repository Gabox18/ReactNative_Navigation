import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import { FontAwesome } from '@expo/vector-icons'
import MyTopTap from './MyTopTap.js'
import { Button, Pressable } from 'react-native'
import { Colors } from '../constants/colors.js'
import { useNavigation } from '@react-navigation/native'

const MyTab = createBottomTabNavigator()

const MyBottomTab = () => {
	const navigation = useNavigation()
	return (
		<MyTab.Navigator
			initialRouteName='TopTap'
			screenOptions={{
				headerShown: true,
				tabBarActiveTintColor: Colors.secondary,
				headerTitleAlign: 'center',
			}}
		>
			<MyTab.Screen
				name='TopTap'
				component={MyTopTap}
				options={{
					headerLeft: () => (
						<Pressable
							onPress={() => {
								navigation.openDrawer()
							}}
						>
							<FontAwesome
								name='align-left'
								size={25}
								color={Colors.secondary}
								style={{ marginLeft: 15 }}
							/>
						</Pressable>
					),
					headerRight: () => (
						<Pressable
							onPress={() => {
								navigation.openDrawer()
							}}
						>
							<FontAwesome
								name='cog'
								size={25}
								color={Colors.secondary}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
					tabBarIcon: ({ color }) => {
						return <FontAwesome name='home' size={30} color={color} />
					},
				}}
			/>
			<MyTab.Screen
				name='Perfil'
				component={Profile}
				options={{
					tabBarBadge: 3,
					tabBarBadgeStyle: { backgroundColor: 'tomato', color: Colors.ligth },
					tabBarIcon: ({ color }) => (
						<FontAwesome name='user' size={28} color={color} />
					),
				}}
			/>
		</MyTab.Navigator>
	)
}

export default MyBottomTab

