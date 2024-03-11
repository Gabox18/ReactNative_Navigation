import { NavigationContainer } from '@react-navigation/native'
import MyStack from './MyStack'
import MyBottomTab from './MyBottomTab'

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<MyStack />
			{/* <MyBottomTab /> */}
		</NavigationContainer>
	)
}
