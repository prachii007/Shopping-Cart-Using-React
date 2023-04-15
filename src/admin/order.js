import { useEffect, useState } from "react";
const Myorder = () => {
    let [allorder, updateOrder] = useState([]);
    const getOrder = () => {
        let sellerid = localStorage.getItem("sellerid");
        let url = "http://localhost:1234/order";
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
                            <div className="col-lg-9"></div>
                        </div>
                    )
                })
            }
        </section>
    )

}
export default Myorder;