import { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import CartItem from '../components/CartItem'
import CheckoutButton from '../components/CheckoutButton'
import Checkout from '../components/Checkout'







const Cart = () => {
	
	const { cartCount, cartDetails } = useShoppingCart()

	const [overlay, setOverlay] = useState()


	

	return (
		//add slide in className logic here.
		<section className="">
			{
				cartCount && cartCount > 0 ? (
					<>
						{
							Object.values(cartDetails ?? {}).map((entry) => {
								return (
									<CartItem key={entry.id} item={entry} />
								)
							})
						}
						<span onClick={() => {
							setOverlay()
						}}>
							<CheckoutButton />
						</span>
					</>
				) : (<h2>Your cart is currently empty</h2>)
			}
			
		</section>
	)
}


export default Cart