import { useEffect, useState } from "react";
const Myorder = () => {
    let [allorder, updateOrder] = useState([]);
    const getOrder = () => {
        let sellerid = localStorage.getItem("sellerid");
        let url = "https://shopping-api-ypz4.onrender.com/order";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateOrder(productArray.reverse())
            })
    }
    useEffect(() => {
        getOrder();
    }, [1]);
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="text-center">
                        {allorder.length} : Order Management
                    </h3>
                </div>
            </div>
            {
                allorder.map((order, index) => {
                    return (
                        <div className="row mb-5" key={index}>
                            <div className="col-lg-3 border">
                                <p>{order.customername}</p>
                                <p>{order.mobile}</p>
                                <p>{order.email}</p>
                                <p>{order.address}</p>
                            </div>
                            <div className="col-lg-9">
                                <h5>Ordered Item </h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.orderItem.map((orderinfo, index2) => {
                                                if (orderinfo.seller == localStorage.getItem("sellerid"))
                                                    return (
                                                        <tr key={index2}>
                                                            <td>{orderinfo.id}</td>
                                                            <td>{orderinfo.name}</td>
                                                            <td>{orderinfo.price}</td>
                                                            <td>{orderinfo.qty}</td>
                                                            <td>{orderinfo.price * orderinfo.qty}</td>
                                                            <td>
                                                                <img height="50" width="50" src={ orderinfo.photo.local ? process.env.PUBLIC_URL + '/' + orderinfo.photo.local : orderinfo.photo.absolute } />
                                                            </td>
                                                        </tr>
                                                    )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Myorder;