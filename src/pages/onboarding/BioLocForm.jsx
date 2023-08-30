import {useMutation, useQuery, gql} from '@apollo/client'
import {useState} from 'react'
import {useFormik} from 'formik'


const GET_USER = gql`
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


const BioLoc = () => {
	const {data, loading, error} = useQuery(GET_USERS)
	
	
	return(
		<main>
			<header>
				<h1>Tell us More</h1>
				<p>tell us a little about yourself and where your home base is. Your home base is important for your stylist to find you</p>
			</header>
		</main>
		)
}

export default BioLoc