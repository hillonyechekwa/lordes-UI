import { useNavigate, redirect } from 'react-router-dom';
import UserForm from '../templates/UserForm';
import { gql, useMutation } from '@apollo/client';
import { isSignedInVar } from '../cache';
import Spinner from '../components/Spinner'



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
				localStorage.setItem('token', signIn)
				isSignedInVar(true)
				navigate("/")
			}
		},
		onError: () => {
			redirect("/signin")
		}
	})
	
	
	if (loading) return <Spinner message="loading your account" size="large"/>
	if (error) return <p>an error occured: {error.message} </p>
	
	return(
		<main>
			<UserForm action={signIn} formType="signin" loading={loading} />
		</main>
		)
}

export default SignIn