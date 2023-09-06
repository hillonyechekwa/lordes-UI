import {useShoppingCart} from 'use-shopping-cart'
import { useState } from 'react'
import Spinner from './Spinner'
import {useNavigate} from 'react-router-dom'



const CheckoutButton = () => {

	const [status, setStatus] = useState("idle")
	const {cartCount, totalPrice} = useShoppingCart()



	return(
		<section>
			<section className="">
			{totalPrice && totalPrice < 1000 ?
			"You must have at least 1000 naira in your cart"
			: cartCount && cartCount > 20 ? 
			"You cannot have more than 20 items in your cart"
			: status === "redirect-error" ?
			"unable to redirect to paystack checkout page"
			: status === "no-items" ? "Please add some items to your cart" : null
			}
			</section>
			<button className="" disabled={
				(totalPrice && totalPrice < 1000) ||
				(cartCount && cartCount > 20) ||
				status === "no-items" ? true : false
			}>
				{status !== "loading" ? "Proceed To Checkout" : <Spinner />}
			</button>
		</section>
		)
}

export default CheckoutButton
