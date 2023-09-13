import {useMutation, gql} from '@apollo/client'
import { isSignedInVar } from '../cache'
import { useNavigate, redirect } from 'react-router-dom'
import UserForm from '../templates/UserForm'
import Spinner from '../components/Spinner'


const SIGNUP_USER = gql`
	mutation signUp ($username: String!, $password: String!, $email: String!, $role: String!){
		signUp(username: $username, password: $password, email: $email, role: $role)
	}
`

const SignUp = () => {
	const navigate = useNavigate()
	const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
		onCompleted({signUp}) {
			console.log(signUp)
			if(signUp){
				localStorage.setItem('token', signUp);
				isSignedInVar(true)
				navigate('/')
			}
		},
		onError: () => {
			redirect("/signup")
		}
	})
	
	
	if(loading) return <Spinner message="creating your account, please wait" size="large" />
	if(error) return <p>An error occured: {error.message}</p>
		
	return(
		<main>
			<UserForm action={signUp} formType="signup" />
		</main>
		)
}

export default SignUp