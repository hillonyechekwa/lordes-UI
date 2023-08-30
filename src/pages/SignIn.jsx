import { useNavigate } from 'react-router-dom';
import UserForm from '../templates/UserForm';
import { gql, useMutation } from '@apollo/client';
import { isSignedInVar } from '../cache';



const SIGNIN_USER = gql`
	mutation signIn($username: String!, $password: String!, $email: String!){
		signIn(username: $username, password: $password, email: $email)
	}
`


const SignIn = () => {
	const navigate = useNavigate()
	const [signIn, {loading, error}] = useMutation(SIGNIN_USER, {
		onCompleted({signIn}){
			if(signIn){
				localStorage.setItem('token', signIn.token)
				isSignedInVar(true)
				navigate("/")
			}
		}
	})
	
	
	if (loading) return <p>...loading</p>
	if (error) return <p>an error occured: {error.message} </p>
	
	return(
		<main>
			<UserForm action={signIn} formType="signin" />
		</main>
		)
}

export default SignIn