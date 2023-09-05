
import {useQuery, gql} from '@apollo/client'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const GET_MARKET = gql`
	query Market{
		products{
			id
			name
			price
			owner{
				username
			}
		}
	}
`



const Market = () => {
	const {data, loading, error} = useQuery(GET_MARKET)
	
	if (loading) return <p>...loading</p>
	if (error) return <p>Error {error.message} </p>
	if (data === undefined) return <p>Error loading data {error.message} </p>
	
	const {products} = data
	
	return(
		<main className="container mx-auto">
			
		</main>
		)
}


export default Market;