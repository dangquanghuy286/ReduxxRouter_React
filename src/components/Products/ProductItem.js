import { useDispatch, useSelector } from "react-redux";

import { addToCart, updateQuantity } from "../../actions/cart";
function ProductsItem(props) {
    const { item } = props;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);
    const handleAddtoCart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id));

        } else {
            dispatch(addToCart(item.id, item))
        }

    }


    return (
        <>
            <div className="products__Item" >
                <div className="products__Image">
                    <img src={item.thumbnail} alt={item.title} />
                </div>
                <h3 className="products__Title">{item.title}</h3>
                <div className="products__Details">
                    <div className="products__Price-old">{item.price}$</div>
                    <div className="products__Price-new">
                        {((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)}$
                    </div>

                    <div className="products__Stock">Còn lại: {item.stock}</div>

                </div>
                <div className="products__Percent">{item.discountPercentage}%</div>
                <div className="products__Button">
                    <button onClick={handleAddtoCart} className="products__ButtonAdd">Thêm vào giỏ</button>
                    <button className="products__ButtonDetail">Xem chi tiết sản phẩm</button>
                </div>
            </div>

        </>)
}
export default ProductsItem;