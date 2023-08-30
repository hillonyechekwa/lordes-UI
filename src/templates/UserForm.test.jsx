import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import UserForm from './UserForm'


describe("user form component", () => {
	it("should render the register component correctly", () => {
		render(<UserForm/>)
		const element = screen.getByRole('heading')
		expect(element).toBeInDocument()
	})
	
	it("should return an error message when all registered fields are not entered" , async () => {
		render(<UserForm />) 
		const buttonElement = screen.getByRole('button')
		await userEvent.click(buttonElement)
	})
	screen.debug()
})