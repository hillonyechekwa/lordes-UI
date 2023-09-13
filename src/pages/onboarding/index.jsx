import BioLocForm from './BioLocForm'
import NewService from './NewService'
import {Routes, Route} from 'react-router-dom'

export const Onboarding = () => {
    return(
        <Routes>
            <Route path="/bio" element={<BioLocForm /> } />
			<Route path="/service" element={<NewService />} />
        </Routes>
    )
}

