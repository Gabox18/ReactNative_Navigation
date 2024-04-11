import { Text, View } from 'react-native'
import { globalStyles } from '../../styles/global'
import Myinput from '../../components/Myinput'
import MyButton from '../../components/MyButton'

const SignUp = ({ navigation }) => {
	return (
		<View style={globalStyles.screenContainer}>
			<Text style={globalStyles.title}>SignUp</Text>
			<Myinput label={'Email'} />
			<Myinput label={'Password'} secureTextEntry />
			<MyButton title={'Sign Up'} />
			<MyButton title={'Login'} onPress={() => navigation.navigate('Login')} />
		</View>
	)
}
export default SignUp
