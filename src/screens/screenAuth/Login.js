import { Text, View } from 'react-native'
import { globalStyles } from '../../styles/global'
import Myinput from '../../components/Myinput'
import MyButton from '../../components/MyButton'

const Login = ({ navigation }) => {
	return (
		<View style={globalStyles.screenContainer}>
			<Text style={globalStyles.title}>Login</Text>
			<Myinput label={'Email'} />
			<Myinput label={'Password'} secureTextEntry />
			<MyButton title={'Sign In'} />
			<MyButton
				title={'Sign up'}
				onPress={() => navigation.navigate('SignUp')}
			/>
		</View>
	)
}
export default Login
