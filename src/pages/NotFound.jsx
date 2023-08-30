import { useRouteError } from "react-router-dom";


export function NotFound () {
	const error = useRouteError()
	console.error(error)
	
	
	return(
		<section>
			<h2>Oops!</h2>
			<p>Sorry! an unexpected error occured</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</section>
		)
}