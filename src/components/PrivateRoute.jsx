import {Navigate, Outlet} from 'react-router-dom'
import Spinner from './Spinner'
import {useQuery, gql} from '@apollo/client'


const IS_SIGNED_IN = gql`
	query IsSignedIn {
		isSignedIn @client
	}
`


const PrivateRoute = ({children, preferredPath}) => {
    const {loading, error, data} = useQuery(IS_SIGNED_IN)


    if(loading) return <Spinner message="" size="large" />
    if(error) return <p>There was an error {error.message}</p>

    if(data.isSignedIn === false) {
        return <Navigate to="/signin" replace />
    }

    if(data.isSignedIn === true && preferredPath){
        return <Navigate to={preferredPath} replace />
    }

    return <Outlet />
}

export default PrivateRoute