import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./Cart.scss"
import { deleteALL } from "../../actions/cart";
function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const total = cart.reduce((sum, item) => {
        const priceNew = parseFloat(((item.info.price * (100 - item.info.discountPercentage)) / 100).toFixed(2));
        return sum + priceNew * item.quantity;
    }, 0);
    const handleDeleteAll = () => {
        dispatch(deleteALL())
    }

    return (
        <>
            <h2>Giỏ Hàng</h2>
            <button onClick={handleDeleteAll} className="cart__clear">Xóa Tất Cả</button>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng tiền : <span>{total}$</span>
                        </div>
                    </>
                ) : (
                    <>Giỏ Hàng Trống...</>
                )}
            </div>

        </>
    )

}
export default Cart;