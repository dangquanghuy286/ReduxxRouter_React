// Import các icon từ thư viện react-icons
import { IoRemoveOutline } from "react-icons/io5"; // Icon dấu trừ
import { IoAdd } from "react-icons/io5";           // Icon dấu cộng
import { TiDelete } from "react-icons/ti";         // Icon xoá

// Import hook của Redux để gửi actions
import { useDispatch } from "react-redux";

// Import action updateQuantity từ file actions/cart
import { deleteItem, updateQuantity } from "../../actions/cart";

// Import hook useRef của React để truy cập DOM elements
import { useRef } from "react";

function CartItem(props) {
    // Lấy đối tượng 'item' từ props
    const { item } = props;

    // Tạo một tham chiếu để truy cập vào input quantity
    const inputRef = useRef();

    // Lấy hàm dispatch từ Redux để gửi action
    const dispatch = useDispatch();

    // Hàm xử lý khi nhấn nút tăng số lượng
    const handleUp = () => {
        // Gửi action cập nhật số lượng tăng lên 1 (mặc định trong updateQuantity)
        dispatch(updateQuantity(item.id));
        // Cập nhật giá trị hiển thị trong input: chuyển giá trị hiện tại từ chuỗi sang số rồi cộng thêm 1
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    }

    // Hàm xử lý khi nhấn nút giảm số lượng
    const handleDown = () => {
        if (item.quantity > 1) {
            // Gửi action cập nhật số lượng giảm đi 1 (truyền thêm -1 để giảm)
            dispatch(updateQuantity(item.id, -1));
            // Cập nhật giá trị hiển thị trong input: chuyển giá trị hiện tại từ chuỗi sang số rồi trừ đi 1
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
    }
    const handleDelete = () => {
        dispatch(deleteItem(item.id))
    }

    return (
        <>
            <div className="cart__item">
                {/* Phần hiển thị hình ảnh sản phẩm */}
                <div className="cart__image">
                    <img src={item.info.thumbnail} alt={item.info.title} />
                </div>

                {/* Phần hiển thị thông tin sản phẩm */}
                <div className="cart__content">
                    <h4 className="cart__title">
                        {item.info.title}
                    </h4>
                    {/* Hiển thị giá mới sau khi áp dụng giảm giá */}
                    <div className="cart__price-new">
                        {((item.info.price * (100 - item.info.discountPercentage)) / 100).toFixed(2)}$
                    </div>
                    {/* Hiển thị giá gốc của sản phẩm */}
                    <div className="cart__price-old">
                        {item.info.price}$
                    </div>
                </div>

                {/* Phần điều chỉnh số lượng sản phẩm */}
                <div className="cart__quantity">
                    {/* Nút giảm số lượng */}
                    <button onClick={handleDown}>
                        <IoRemoveOutline />
                    </button>
                    {/* Input hiển thị số lượng, sử dụng ref để cập nhật giá trị */}
                    <input ref={inputRef} defaultValue={item.quantity} />
                    {/* Nút tăng số lượng */}
                    <button onClick={handleUp}>
                        <IoAdd />
                    </button>
                </div>

                {/* Nút xoá sản phẩm khỏi giỏ hàng */}
                <button onClick={handleDelete} className="button__Delete">
                    <TiDelete />
                </button>
            </div>
        </>
    )
}

export default CartItem;
