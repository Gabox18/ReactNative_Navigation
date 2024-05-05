import RootNavigator from './src/navigation/RootNavigator'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
})

export default function App() {
	return (
		<Provider store={store}>
			<RootNavigator />
		</Provider>
	)
}
