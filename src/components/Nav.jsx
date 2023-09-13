//use chakra mobile mediaquery
import { NavLink } from 'react-router-dom';
import { gql, useQuery, useApolloClient } from '@apollo/client';
import { isSignedInVar } from '../cache';
import {GET_ME} from '../gql/query'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import AvatarDefault from '../components/AvatarDefault'
import Spinner from './Spinner'


const IS_SIGNED_IN = gql `
	query IsSignedIn {
		isSignedIn @client
	}
`



const Nav = () => {
	
	const navigate = useNavigate()

    const client = useApolloClient()
    const { data } = useQuery(IS_SIGNED_IN)
	const {data: userData, loading, error} = useQuery(GET_ME)

    const handleSignOut = () => {
        client.cache.evict({ fieldName: 'me' })
        client.cache.gc()

        localStorage.removeItem('token')

        isSignedInVar(false)
    }
    

	if(loading) return <Spinner message="" size="mid" />
	if(error) return <p>there was an error {error.message}</p>
    


    return data.isSignedIn ? (
		<nav className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-6 relative max-w-[85rem] w-full font-sans bg-slate-950 border border-gray-200 rounded-[36px] mx-2 py-0 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
		<div className="flex items-center justify-between">
		<img className="hover:cursor" src="/images/logo-transparent.png" alt="nav-logo" width="80" onClick={() => navigate('/')} />
		<div className="md:hidden">
				<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
		<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
				</button>
			</div>
		</div>
			<div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" id="navbar-collapse-with-animation">
				<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
					<NavLink to="/" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Home</NavLink>
					<NavLink to="/market" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Market</NavLink>
					<NavLink to="/notifications" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">
						<FontAwesomeIcon icon={faBell} />
					</NavLink>
					<NavLink to="/profile" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 flex justify-evenly items-center gap-4">
						 <p className="capitalize font-medium text-white">Hi, {userData.me.username}</p>
						<AvatarDefault />
					</NavLink>
					<button className="py-2 px-8 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={handleSignOut}>Sign Out</button>
				</div>
			</div>
		</nav>
		</nav>
    ) : (
    <nav className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
       <nav className="mt-6 relative max-w-[85rem] w-full font-sans bg-slate-950 border border-gray-200 rounded-[36px] mx-2 py-0 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
       <div className="flex items-center justify-between">
			<img className="hover:cursor" src="/images/logo-transparent.png" alt="nav-logo" width="80" onClick={() => navigate('/')} />
			<div className="md:hidden">
				<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
		<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
				</button>
			</div>
		</div>
			<div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" id="navbar-collapse-with-animation">
				<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
					<NavLink to="/" className="font-medium text-gray-200 hover:text-violet-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Home</NavLink>
					<NavLink to="/about" className="font-medium text-gray-200 hover:text-violet-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">About</NavLink>
					<NavLink to="/howitwrks" className="font-medium text-gray-200 hover:text-violet-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">How It Works</NavLink>
					{/* <NavLink to="/market" className="font-medium text-gray-200 hover:text-violet-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Market</NavLink> */}
					<NavLink to="/signin" className="font-medium text-gray-200 hover:text-violet-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-600">Sign In</NavLink>
					<button className="py-3 px-12 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-gray-800 text-white hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={() => navigate('/signup')}>Join</button>
				</div>
			</div>
		</nav>
		</nav>
    )
}


export default Nav