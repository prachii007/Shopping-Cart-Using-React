import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const Myproduct = () => {
    let [allproduct, updateProduct] = useState([]);
    const getProduct = () => {
        let sellerid = localStorage.getItem("sellerid");
        let url = "http://localhost:1234/product?seller=" + sellerid;
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray);
            })
    }
    useEffect(() => {
        getProduct();

    }, [1]);
    return (
        <h1>Product List : {allproduct.length}</h1>
    )

}
export default Myproduct;