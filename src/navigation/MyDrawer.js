import { createDrawerNavigator } from '@react-navigation/drawer'
import Notifications from '../screens/Notifications'
import MyStack from './MyStack'

const drawer = createDrawerNavigator()

const MyDrawer = () => {
	return (
		<drawer.Navigator>
			<drawer.Screen name='Stack' component={MyStack} />
			<drawer.Screen name='Notifications' component={Notifications} />
		</drawer.Navigator>
	)
}
export default MyDrawer
