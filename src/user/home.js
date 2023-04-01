import { useState, useEffect } from "react";
const Myhome = () => {
    let [allproduct, updateProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:1234/product")
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }
    useEffect(()=>{
        getProduct();
    },[1]);
    
    return (
        <main>
            <section id="banner">React Shopping App</section>
            <section className="container mt-4">
                <div className="row"></div>
            </section>
        </main>
    )
}
export default Myhome;