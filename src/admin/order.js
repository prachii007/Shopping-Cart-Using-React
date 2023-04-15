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

    }, [1]);
    return (
        <h1>My Order</h1>
    )

}
export default Myorder;