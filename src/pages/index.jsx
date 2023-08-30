
import BasePage from './Base'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Market from './Market'
import {Routes, Route} from 'react-router-dom'

export const Page = () => {
	return(
		<Routes>
			<Route index element={<BasePage />}/>
			<Route path="/market" element={<Market />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			{/*add protected routes here. for the Notifications and Profile routes*/}
		</Routes>
		)
}

