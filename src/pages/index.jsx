
import BasePage from './Base'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Market from './Market'
import About from './About'
import Notifications from './Notifications'
import BioLocForm from './onboarding/BioLocForm'
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
import { PROTOCOL_ERRORS_SYMBOL } from '@apollo/client/errors';

export const Page = () => {
	return(
		<Routes>
			<Route index element={<BasePage />}/>
			<Route path="/about" element={<About /> } />
			<Route path="/market" element={<Market />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/notifications" element={<PrivateRoute preferredPath="/notifications" />}>
				<Route index element={<Notifications />} />
			</Route>
			{/*add protected routes here. for the Notifications and Profile routes*/}
		</Routes>
		)
}

