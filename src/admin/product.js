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
                updateProduct(productArray.reverse()); //reverses the order of the array
            })
    }
    useEffect(() => {
        getProduct();

    }, [1]);
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center">Product List: {allproduct.length}</h1>
                    <table className="table shadow-lg mt-4">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.details}</td>
                                            <td><img src={product.photo} height="50" width="50" /></td>
                                            <td className="text-center"><button className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i> </button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )

}
export default Myproduct;