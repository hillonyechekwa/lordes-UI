/* eslint-disable react/prop-types */
import Nav from './Nav';
import Footer from './Footer';
import {useLocation} from 'react-router-dom'

const Layout = ({children}) => {
	
	const location = useLocation()
	return(
	<main className="px-4">
	{
		location.pathname === "/signup" || location.pathname === "/signin" ? "" : <Nav />
	}
		<main className="w-full">
			{children}
		</main>
		<Footer />
	</main>
	)
}


export default Layout