import { useState, useEffect } from "react";
const Mycart = () => {
    let [allcart, updateCart] = useState([]);
    const getCart = () => {
        fetch("http://localhost:1234/cart")
            .then(response => response.json())
            .then(productArray => {
                updateCart(productArray);
            })
    }
    useEffect(() => {
        getCart();
    }, [1]);
    return (
        <main>
            <h1 className="display-6 mt-3">My Cart</h1>
            <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-7">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center">
                                <th>Sr No</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            allcart.map((cart, index) => {
                                return (

                                    <tbody>
                                        <tr key={index}  className="text-center">
                                            <td>{index + 1}</td>
                                            <td className="text-start"><img src={cart.photo} height="50" width="50" className="rounded" /> {cart.name}</td>
                                            <td>{cart.price}</td>
                                            <td>{cart.qty}</td>
                                            <td><button className="btn btn-danger">Remove From Cart</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </main>

    )
}
export default Mycart;

/* fetch data from cart api and display in cart page
Note:
cart page
row
col-5 = empty
col-7 = display cart in table format
*/