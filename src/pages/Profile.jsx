import {useQuery, gql} from '@apollo/client';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helemet';



const GET_PROFILE = gql`
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


const Profile = () => {
	const {data, loading, error} = useQuery(GET_PROFILE)
	
	if(loading) return <p>...loading</p>
	if(error) return <p>Error: {error.message} </p>
	if(data === undefined) return <p>Error loading data: {error.message} </p>
	
	return(
		<main>
			<Helmet>
				<title>Lordes' | {data.me.username} </title>
			</Helmet>
			<section>
				<header>
					<h3>username: {data.me.username}</h3>
					<p>bio: {data.me.bio}</p>
					<p>location: {data.me.location}</p>
					<p>role: {data.me.role} </p>
				</header>
				<section></section>
			</section>
		</main>
		)
}


export default Profile;