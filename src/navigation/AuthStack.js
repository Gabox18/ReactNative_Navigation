import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/screenAuth/Login'
import SignUp from '../screens/screenAuth/SignUp'

const Auth = createStackNavigator()

const AuthStack = () => {
	return (
		<Auth.Navigator screenOptions={{ headerShown: false }}>
			<Auth.Screen name='Login' component={Login} />
			<Auth.Screen name='SignUp' component={SignUp} />
		</Auth.Navigator>
	)
}

export default AuthStack
