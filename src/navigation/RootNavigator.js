import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './MyDrawer'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { restoreToken } from '../features/auth/auth'
import { useEffect } from 'react'
import Splash from '../screens/Splash'

export default function RootNavigator() {
	const { userToken, isLoading } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	useEffect(() => {
		getValue()
	}, [])

	async function getValue() {
		try {
			const value = await AsyncStorage.getItem('@token')
			if (value !== null) {
				console.log('data restore', value)
				dispatch(restoreToken(value))
			} else {
				console.log('no data')
				dispatch(restoreToken(null))
			}
		} catch (error) {
			console.log(error)
		}
	}
	if (isLoading) {
		return <Splash />
	}
	return (
		<NavigationContainer>
			{userToken ? <MyDrawer /> : <AuthStack />}
		</NavigationContainer>
	)
}
