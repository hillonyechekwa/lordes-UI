import { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'
import Checkout from './Checkout'







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
				) : (<h2>Your cart is empty</h2>)
			}
			
		</section>
	)
}


export default Cart