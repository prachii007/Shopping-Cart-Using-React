import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const Mycart = () => {
    let [allcart, updateCart] = useState([]);
    const getCart = () => {
        fetch("https://shopping-api-ypz4.onrender.com/cart")
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
            let url = "https://shopping-api-ypz4.onrender.com/cart/" + pid;
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

    const sweetAlert = (data) => {
        Swal.fire({
            title: "Success",
            text: data,
            icon: "success",
            confirmButtonText: "OK",
            timer: 7000,
            timerProgressBar: true

        });
    }

    const deleteCart = (pid) => {
        let url = "https://shopping-api-ypz4.onrender.com/cart/" + pid;
        let postOption = { method: "DELETE" };
        fetch(url, postOption)
            .then(response => response.json())
            .then(serverRes => {
                // sweetAlert2("Item removed from the cart")
                getCart(); //reload the list
            })
    }
    //order placing code starts here
    let [fullname, pickName] = useState("");
    let [mobile, pickMobile] = useState("");
    let [mobileErrorMsg, updateMobileErrorMsg] = useState("");
    let [email, pickEmail] = useState("");
    let [emailErrorMsg, updateEmailErrorMsg] = useState("");
    let [address, pickAddress] = useState("");

    let epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let mpattern = /^[0]?[6789]\d{9}$/;

    const sweetAlert2 = (text) => {
        Swal.fire({
            title: 'Oops...',
            text: text,
            icon: 'error',
            confirmButtonColor: '#dc3545', // Set the color of the confirm button
            confirmButtonText: 'OK' // Set the label of the confirm button
        })
    }

    const save = () => {
        let formstatus = true;
        if (fullname === "" || mobile === "" || email === "" || address === "") {
            sweetAlert2("All fields are compulsory");
            formstatus = false;
        }
        if (!epattern.test(email)) {
            updateEmailErrorMsg("Invalid Email ID")
            formstatus = false;
        } else {
            updateEmailErrorMsg("")
        }
        if (!mpattern.test(mobile)) {
            updateMobileErrorMsg("Invalid Mobile No")
            formstatus = false;
        } else {
            updateMobileErrorMsg("")
        }
        if (formstatus === true) {
            let url = "https://shopping-api-ypz4.onrender.com/order/";
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
                    sweetAlert(`Hi ${fullname}! Your order was received. Please shop again with us!`)
                    //clear input field from the customer's details
                    let inputs = document.querySelectorAll(".customerDetail");
                    inputs.forEach(input => input.value = '');
                    //clear the cart entirely 
                    let idsToDelete = allcart.map(function (el) { return (el.id) });
                    for (let id of idsToDelete) {
                        deleteCart(id);
                        getCart();
                    }
                })
        }
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
                                <label>Customer Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control customerDetail" onChange={obj => pickName(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Mobile No <span className="text-danger">*</span><span className="text-danger">{mobileErrorMsg}</span></label>
                                <input type="tel" className="form-control customerDetail" onChange={obj => pickMobile(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Email ID <span className="text-danger">*</span><span className="text-danger">{emailErrorMsg}</span></label>
                                <input type="email" className="form-control customerDetail" onChange={obj => pickEmail(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Delivery Address <span className="text-danger">*</span></label>
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
                                <th>ID</th>
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
                                            <td className="text-start"><img src={cart.photo.local ? process.env.PUBLIC_URL + '/' + cart.photo.local : cart.photo.absolute} height="50" width="50" className="rounded" /> {cart.name}</td>
                                            <td>₹{cart.price}</td>
                                            <td>
                                                <div className="input-group">
                                                    <button onClick={one.bind(this, cart.id, cart, "A")} className="btn btn-info">+</button>
                                                    <input value={cart.qty} type="text" className="form-control" />
                                                    <button onClick={one.bind(this, cart.id, cart, "B")} className="btn btn-info">-</button>
                                                </div>
                                            </td>
                                            <td>₹{cart.qty * cart.price}</td>
                                            <td><button onClick={deleteCart.bind(this, cart.id)} className=" btn-sm btn btn-danger">Remove From Cart</button></td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>SGST: <br /> ₹{total * 9 / 100}</td>
                                <td>CGST: ₹{total * 9 / 100}</td>
                                <td colSpan="2">GST Amount: ₹{(total * 9 / 100) + (total * 9 / 100)}</td>
                                <td colSpan="2" className="">₹{total} </td>
                            </tr>
                            <tr>
                                <td className="text-center" colSpan="6">
                                    Total Amount to Pay: ₹{total + (total * 18 / 100)}
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
