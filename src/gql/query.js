import {gql} from '@apollo/client'

const GET_SERVICES = gql`
	query services{
		service{
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

const GET_SERVICE = gql`
	query service($id: ID!){
		service(id: $id){
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

const GET_PRODUCTS = gql`
	query products{
		products{
			id
			name
			price
			quantity
			owner{
				id
				username
			}
		}
	}
`

const GET_PRODUCT = gql `
	query product($id: ID!){
		product(id: $id){
			id
			name
			price
			quantity
			owner{
				id
				username
			}
		}
	}
`


const GET_USERS = gql`
	query users{
		users{
			id
			username
			bio
			location
			role
			catalogue{
				id
				name
				price
			}
			productCatalogue{
				id
				name
				price
				quantity
			}
		}
	}
`


const GET_USER = gql`
	query user($username: String!){
		user(username: $username){
			id
			username
			bio
			location
			role
			catalogue{
				id
				name
				price
			}
			productCatalogue{
				id
				name
				price
				quantity
			}
		}
	}
`

const GET_ME = gql`
	query Profile{
	 	me{
			id
			username
			bio
			location
			role
			catalogue{
				id
				name
				price
			}
			productCatalogue{
				id
				name
				price
				quantity
			}
		}
	}
`


const IS_SIGNED_IN = gql`
	query IsSignedIn {
		isSignedIn @client
	}
`


export {GET_SERVICES, GET_SERVICE, GET_PRODUCTS, GET_PRODUCT, GET_USER, GET_USERS, GET_ME, IS_SIGNED_IN}


