import {useQuery, gql} from '@apollo/client'
import Dashboard from './Dashboard'
import {Helmet} from 'react-helmet'


const IS_SIGNED_IN = gql`
	query IsSignedIn {
		isSignedIn @client
	}
`



const Base = () => {
	const {data} = useQuery(IS_SIGNED_IN)
	
	
	return data.isSignedIn ? (
			<Dashboard />
		) : (
		<main>
			<Helmet>
				<title>Lorde's | Home</title>
			</Helmet>
			<h1 className="font-sans font-normal">welcome to the home page</h1>
			<div>
				
			</div>
		</main>
		)
}


export default Base;
