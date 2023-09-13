
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import SideBar from '../components/SideBar'
import { IS_SIGNED_IN } from '../gql/query'
import Spinner from '../components/Spinner'
//update and import the megamenu here
import MegaMenu from '../components/MegaMenu'
//update and import the image card here


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
	const { data } = useQuery(IS_SIGNED_IN)
	const { data: marketData, loading, error } = useQuery(GET_MARKET)

	if (loading) return <Spinner message="loading market" size="large" />
	if (error) return <p>Error {error.message} </p>
	if (marketData === undefined) return <p>Error loading data {error.message} </p>

	const { products } = marketData

	return data.isSignedIn ? (
		<main className="container mx-auto p-4 mt-8">
			<Helmet>
				<title>Lorde's | Market</title>
			</Helmet>
			<main className="container mx-auto">
				<MegaMenu />
				<h1>This is the Lorde's Hair MarketPlace</h1>
			</main>
		</main>
	)
		:
		(
			<></>
		)
}


export default Market;