import { Text, View } from 'react-native'
import { globalStyles } from '../../styles/global'
import Myinput from '../../components/Myinput'
import MyButton from '../../components/MyButton'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { signIn } from '../../features/auth/auth'

const Login = ({ navigation }) => {
	const [token, setToken] = useState('')
	const dispatch = useDispatch()

	async function save(value) {
		try {
			await AsyncStorage.setItem('@token', value)
			dispatch(signIn(value))
			console.log('data save')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={globalStyles.screenContainer}>
			<Text style={globalStyles.title}>Login</Text>
			<Myinput label={'Email'} value={token} onChangeText={setToken} />
			<Myinput label={'Password'} secureTextEntry />
			<MyButton title={'Sign In'} onPress={() => save(token)} />
			<MyButton
				title={'Sign up'}
				onPress={() => navigation.navigate('SignUp')}
			/>
		</View>
	)
}
export default Login
