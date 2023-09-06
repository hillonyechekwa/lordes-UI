import { useShoppingCart } from 'use-shopping-cart'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'





const CartItem = ({item}) => {

	const {removeItem} = useShoppingCart()

	const {bannerImage, name, price, value, formattedPrice, formattedValue, quantity} = item

	function removeItemFromCart(){
		removeItem(item.id)
	}


	return(
		<section className="">
			<button id={Styles.deleteItem} onClick={() => removeItemFromCart()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
			</button>
			<section>
				<img id={Styles.itemImage} src={bannerImage.url} alt={name} />
				<h2>Product: {name}</h2>
				<p id={Styles.quant}>Quantity: {quantity}</p>
				<p className="">Base price: <span style={{color: "forestgreen" }} >NGN</span> {price}</p>
				<p className="">Total price: <span style={{color: "forestgreen" }} >NGN</span> {value}</p>
			</section>
		</section> 
		)
}


export default CartItem