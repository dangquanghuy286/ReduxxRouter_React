import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";
import "./Products.scss"
import ProductsItem from "./ProductItem";



function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProductList();
            setProducts(result)
        }
        fetchAPI();
    }, []);

    return (
        <>
            <div className="products">
                {products.map(item => (
                    <ProductsItem key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
export default Products;