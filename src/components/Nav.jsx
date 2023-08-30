//use chakra mobile mediaquery
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { gql, useQuery, useApolloClient } from '@apollo/client';
import { isSignedInVar } from '../cache';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const IS_SIGNED_IN = gql `
	query IsSignedIn {
		isSignedIn @client
	}
`



const Nav = () => {

    const client = useApolloClient()
    const { data } = useQuery(IS_SIGNED_IN)

    const handleSignOut = () => {
        client.cache.evict({ fieldName: 'me' })
        client.cache.gc()

        localStorage.remoteItem('token')

        isSignedInVar(false)
    }


    return data.isSignedIn ? (
        <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
		<div className="flex items-center justify-between">
			<img className="flex-none" src="/images/logo-dark.svg" alt="nav-logo" />
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
			{/*<ul className="w-fit bg-red-300">
				<li className="">
					<NavLink to="/" className="">home</NavLink>
				</li>
				<li>
					<NavLink to="/Market">market</NavLink>
				</li>
				<li>
					<NavLink to="/Profile">profile</NavLink>
				</li>
				<li>
					<button className="" onClick={handleSignOut}>Sign Out</button>
				</li>
			</ul>*/}
			<div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" id="navbar-collapse-with-animation">
				<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
					<NavLink to="/" className="">home</NavLink>
					<NavLink to="/market" className="">Market</NavLink>
					<NavLink to="/profile" className="">Profile</NavLink>
					<button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={handleSignOut}>Sign Out</button>
				</div>
			</div>
		</nav>
    ) : (
       <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
			<ul className="w-6/12 py-4 flex justify-between items-center">
				<li className="capitalize hover:text-blue-600">
					<NavLink to="/">home</NavLink>
				</li>
				<li className="capitalize hover:text-blue-600">
					<NavLink to="/Market">market</NavLink>
				</li>
				<li className="capitalize hover:text-blue-600">
					<NavLink to="/signin">signin</NavLink>
				</li>
				<li className="capitalize">
					<NavLink to="/signup" className="w-12 h-5 bg-white text-blue-700 text-base font-medium rounded-3xl px-4 py-2 hover:text-white hover:bg-blue-700 transition duration-200 ease-out">signup</NavLink>
				</li>
			</ul>
		</nav>
    )
}


export default Nav