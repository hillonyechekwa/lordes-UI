import {useState} from 'react'
import {useFormik} from 'formik'
import { Helmet } from 'react-helmet'



const NewServiceForm = ({action}) => {
	
	
	const [values, setValues] = useState()
	
	const formik = useFormik({
		initialValues: {
			name: '',
			price: ''
		},
		onSubmit: values => {
			action({
				variables: {
					...values
				}
			})
		},
		onChange: event => {
			setValues({
				...values,
				[event.target.name]: [event.target.value]
			})
		}
	})
	
	return(
		<main>
			<Helmet>
				<title>Lordes' | Create A New Service</title>
			</Helmet>
			
			<form onSubmit={formik.handleSubmit} >
				
			</form>
		</main>
		)
}

export default NewServiceForm
