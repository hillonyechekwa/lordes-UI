import {useMutation, useQuery, gql} from '@apollo/client'



const CREATE_NEW_SERVICE =  gql`
	mutation createService($name: String!, $price: Float!){
		createService(name: $name, price: $price){
			id
			name
			price
			owner{
				id
				username
			}
		}
	}
`


// const GET_SERVICES = gql`
	
// `

const NewService = () => {
	
	const [data, {loading, error}] = useMutation(CREATE_NEW_SERVICE, {
		onCompleted: data => {
			
		}
	})
	
	if(loading) return <p>...loading</p>
	if(error) return <p>error: {error.message}</p>
	
	return(
		<main>
			
		</main>
		)
}

export default NewService



