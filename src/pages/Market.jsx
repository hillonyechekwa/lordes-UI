
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
		<main className="w-full h-full container flex flex-col justify-between items-center">
		<Helmet>
			<title> Lordes' | Market Place </title>
		</Helmet>
			<header className="w-10/12 h-48 container bg-blue-600 flex flex-col justify-between items-center gap-3 relative -top-60 py-5 text-white rounded-lg">
				<h1 className="font-sans font-bold text-6xl">Lordes' Market Place </h1>
				<h4 className="font-sans font-normal text-lg"> Buy or Sell what you want on your hair. It's up to you </h4>
			</header>
			<section className="container w-full flex flex-col justify-between items-center gap-3">
				{
					products.map(({id, name, price, owner}) => {
						return(
							<section key={`product-${id}`} className=" border-2 border-black rounded-md p-4">
								<Link to="/">
								<h1 className="text-3xl font-medium hover:text-blue-400">Product Name: <span className="capitalize">{name}</span> </h1> 
								</Link>
								<p className="font-medium text-green-400">Price: {price}</p>
								<Link to="/">
									<p className="capitalize font-medium">{owner.username}</p>
								</Link>
							</section>
							)
					})
				}
			</section>
		</main>
		)
}


export default Market;