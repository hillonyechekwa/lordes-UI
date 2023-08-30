import {useQuery, gql} from '@apollo/client';
import {Helmet} from 'react-helmet'


const GET_USERS = gql`
	query Profile{
		me{
			id
			username
			bio
			location
			role
			catalogue{
				name
				price
			}
			productCatalogue{
				name
				price
				quantity
			}
		}
	}
`


const Dashboard = ( ) => {
	const {data, loading, error} = useQuery(GET_USERS)
	
	
	if (loading) return <p> ...loading </p>
	if (error) return <p>error: {error.message} </p>
	if (data === undefined) <p> error: {error.message} </p>
	
	
	return (
		<main>
			<Helmet>
				<title>Lordes | Dashboard</title>
			</Helmet>
			<section>
				This is a user dashboard
			</section>
			{
				data.me.role === 'STYLIST' ? 
				<>
					
				</>
				: 
				<>
				
				</>
			}
			
			
		</main>
	)
}


export default Dashboard