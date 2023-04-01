import { useState, useEffect } from "react";
const Myhome = () => {
    let [allproduct, updateProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:1234/product")
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray);
            })
    }
    useEffect(() => {
        getProduct();
    }, [1]);

    return (
        <main>
            <section id="banner">React Shopping App</section>
            <section className="container mt-4">
                <div className="row">
                    {
                        allproduct.map((product, index) => {
                            return (
                                <div className="col-lg-3 mb-5" key={index}>
                                    <div className="p-3">
                                        <h2 className="text-primary">{product.name}</h2>
                                        <img className="rounded shadow" src={product.photo} height="200" width="100%"/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}
export default Myhome;