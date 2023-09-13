import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet'
import {useNavigate} from 'react-router-dom'
import SideBar from '../components/SideBar'
import Card from '../components/HoverCard'


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


const Dashboard = () => {
	const { data, loading, error } = useQuery(GET_USERS)


	if (loading) return <p> ...loading </p>
	if (error) return <p>error: {error.message} </p>
	if (data === undefined) <p> error: {error.message} </p>


	return (
		<main className="container mx-auto pt-8 text-center">
			<Helmet>
				<title>Lordes | Dashboard</title>
			</Helmet>

			{
				data.me.role === 'STYLIST' &&
				(
					<>
						<section>
							This is a stylist dashboard
						</section>
					</>
				)
			}
			{
				data.me.role === 'MERCHANT' &&
				(
					<>
						<section>
							This is a merchant dashboard
						</section>
					</>
				)
			}
			{
				data.me.role === 'USER' &&
				(
					<>
						<section>
							This is a user dashboard
						</section>
					</>
				)
			}

		</main>
	)
}


export default Dashboard