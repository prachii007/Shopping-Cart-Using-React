import { useState, useEffect } from "react";
const Mydashboard = () => {
    let [allproduct, updateProduct] = useState([]);
    let [allorder, updateOrder] = useState([]);

    const getProduct = () => {
        let sellerid = localStorage.getItem("sellerid");
        let url = "https://shopping-api-ypz4.onrender.com/product?seller=" + sellerid;
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray.reverse());
            })
    }
    const getOrder = () => {
        let sellerid = localStorage.getItem("sellerid");
        let url = "https://shopping-api-ypz4.onrender.com/order";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateOrder(productArray.reverse());
            })
    }

    useEffect(() => {
        getProduct();
        getOrder();
    }, [1]);

    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Seller Dashboard</h1>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <i className="fa fa-suitcase fa-5x text-info mb-3"></i>
                    <h2>{allproduct.length} Total Products</h2>
                </div>
                <div className="col-lg-3">
                    <i className="fa fa-headset fa-5x text-warning mb-3"></i>
                    <h2>{allorder.length} Total Orders</h2>
                </div>
                <div className="col-lg-3">
                </div>
            </div>
        </section>
    )

}
export default Mydashboard;