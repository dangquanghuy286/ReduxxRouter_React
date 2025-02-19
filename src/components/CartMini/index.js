import { Link } from "react-router-dom"; // Import Link để điều hướng giữa các trang
import { FaCartArrowDown } from "react-icons/fa"; // Import icon giỏ hàng
import { useSelector } from "react-redux"; // Import useSelector để lấy dữ liệu từ Redux store
import "./CartMini.scss"
function CartMini() {
    // Lấy dữ liệu giỏ hàng từ Redux store
    const cart = useSelector(state => state.cartReducer);

    // Tính tổng số lượng sản phẩm trong giỏ hàng
    const total = cart.reduce((sum, item) => {
        return sum + item.quantity; // Cộng dồn số lượng của từng sản phẩm
    }, 0);
    // Dấu , 0 giúp tránh lỗi khi giỏ hàng trống.
    // Nó đặt giá trị khởi đầu của tổng (sum) là 0.
    // Luôn nên dùng giá trị khởi tạo khi cộng dồn trong reduce(). 

    return (
        <>
            {/* Liên kết đến trang giỏ hàng, hiển thị tổng số sản phẩm */}
            <Link to="/cart" className="cart-mini">
                <FaCartArrowDown />
                <span>{total}</span>
            </Link>

        </>
    );
}

export default CartMini;
