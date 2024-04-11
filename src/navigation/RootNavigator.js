import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './MyDrawer'
import AuthStack from './AuthStack'

export default function RootNavigator() {
	const user = true
	return (
		<NavigationContainer>
			{user ? <MyDrawer /> : <AuthStack />}
		</NavigationContainer>
	)
}

//13:30
