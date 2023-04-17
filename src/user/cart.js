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
    let total = 0;
    const one = (pid, product, action) => {
        if (action === "B") {
            product["qty"] = product.qty - 1;
        } else {
            product["qty"] = product.qty + 1;
        }
        if (product.qty > 0) {
            let url = "http://localhost:1234/cart/" + pid;
            let postOption = {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(product)
            }
            fetch(url, postOption)
                .then(response => response.json())
                .then(serverRes => {
                    getCart();
                })
        } else {
            deleteCart(pid);
        }
    }
    const deleteCart = (pid) => {
        let url = "http://localhost:1234/cart/" + pid;
        let postOption = { method: "DELETE" };
        fetch(url, postOption)
            .then(response => response.json())
            .then(serverRes => {
                getCart(); //reload the list
            })
    }
    //order placing code starts here
    let [fullname, pickName] = useState("");
    let [mobile, pickMobile] = useState("");
    let [email, pickEmail] = useState("");
    let [address, pickAddress] = useState("");
    const save = () => {
        let url = "http://localhost:1234/order/";
        let orderData = {
            //property: variable//
            customername: fullname,
            mobile: mobile,
            email: email,
            address: address,
            orderItem: allcart
        };
        let postOption = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(orderData)
        };
        fetch(url, postOption)
            .then(response => response.json())
            .then(serverRes => {
                alert("Order Received, Order ID:" + serverRes.id)
                //clear input field from the customer's details
                let inputs = document.querySelectorAll(".customerDetail");
                inputs.forEach(input => input.value = '');
            })
    }
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-4">
                    <h3 className="display-6">Customer Details</h3>
                    <div className="card border-0 shadow-lg mt-4">
                        <div className="card-header bg-primary text-white">Customer Details</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label>Customer Name</label>
                                <input type="text" className="form-control customerDetail" onChange={obj => pickName(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Mobile No</label>
                                <input type="tel" className="form-control customerDetail" onChange={obj => pickMobile(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Email ID</label>
                                <input type="email" className="form-control customerDetail" onChange={obj => pickEmail(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Delivery Address</label>
                                <textarea type="text" className="form-control customerDetail" onChange={obj => pickAddress(obj.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={save} className="btn btn-warning btn-sm">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h3 className="text-center text-primary">{allcart.length} Items in Cart</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center bg-light text-primary">
                                <th>Sr No</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allcart.map((cart, index) => {
                                    total = total + cart.qty * cart.price;
                                    return (
                                        <tr key={index} className="text-center">
                                            <td>{cart.id}</td>
                                            <td className="text-start"><img src={cart.photo} height="50" width="50" className="rounded" /> {cart.name}</td>
                                            <td>{cart.price}</td>
                                            <td>
                                                <div className="input-group">
                                                    <button onClick={one.bind(this, cart.id, cart, "A")} className="btn btn-info">+</button>
                                                    <input value={cart.qty} type="text" className="form-control" />
                                                    <button onClick={one.bind(this, cart.id, cart, "B")} className="btn btn-info">-</button>
                                                </div>
                                            </td>
                                            <td>{cart.qty * cart.price}</td>
                                            <td><button onClick={deleteCart.bind(this, cart.id)} className=" btn-sm btn btn-danger">Remove From Cart</button></td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>SGST - {total * 9 / 100}</td>
                                <td>CGST - {total * 9 / 100}</td>
                                <td colSpan="2">GST Amount - {(total * 9 / 100) + (total * 9 / 100)}</td>
                                <td colSpan="2" className="">Rs. {total} </td>
                            </tr>
                            <tr>
                                <td className="text-center" colSpan="6">
                                    {total + (total * 18 / 100)} : Total Amount to Pay
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

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