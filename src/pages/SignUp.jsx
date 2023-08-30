import {useMutation, gql} from '@apollo/client'
import { isSignedInVar } from '../cache'
import { useNavigate } from 'react-router-dom'
import UserForm from '../templates/UserForm'


const SIGNUP_USER = gql`
	mutation signUp ($username: String!, $password: String!, $email: String!, $role: String!){
		signUp(username: $username, password: $password, email: $email, role: $role)
	}
`

const SignUp = () => {
	const navigate = useNavigate()
	const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
		onCompleted({signUp}) {
			if(signUp){
				localStorage.setItem('token', signUp.token);
				isSignedInVar(true)
				navigate('/onboarding')
			}
		}
	})
	
	
	if(loading) return <p>...loading</p>
	if(error) return <p>An error occured: {error.message}</p>
		
	return(
		<main>
			<UserForm action={signUp} formType="signup" />
		</main>
		)
}

export default SignUp