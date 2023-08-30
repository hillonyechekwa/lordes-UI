/* eslint-disable react/prop-types */
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({children}) => {
	return(
	<main className="w-screen p-3 overflow-x-hidden box-border grid grid-cols-1 grid-rows-3 justify-center ">
		<Nav />
		<main className="w-full">
			{children}
		</main>
		<Footer />
	</main>
	)
}


export default Layout