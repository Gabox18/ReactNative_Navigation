import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../screens/Home'
import Contacts from '../screens/Contacts'

const Tab = createMaterialTopTabNavigator()

export default function MyTopTap() {
	return (
		<Tab.Navigator tabBarPosition='top' initialRouteName='home'>
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Contacts' component={Contacts} />
		</Tab.Navigator>
	)
}
