import { useState, useEffect } from "react";
const Myhome = () => {
    let [allproduct, updateProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:1234/product")
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray.reverse());
            })
    }
    useEffect(() => {
        getProduct();
    }, [1]);

    const addtocart = (product) => {
        product["qty"] = 1;
        let url = "http://localhost:1234/cart";
        let postOption = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(product)
        };
        fetch(url, postOption)
            .then(response => response.json)
            .then(serverStatus=>{
                alert("Item added in cart");
            })
    }
    let [keyword, updateKeyword] = useState("");

    return (
        <main>
            <section id="banner">React Shopping App</section>
            <section className="container mt-4">
                <div className="row mb-4">
                     <div className="col-lg-4"></div>
                     <div className="col-lg-4">
                        <input onChange={obj=>updateKeyword(obj.target.value)} className="form-control" type="text" placeholder="Search here"/>
                     </div>
                     <div className="col-lg-4"></div>
                </div>
                <div className="row text-center">
                    {
                        allproduct.filter(post =>{if(post.name.toLowerCase().includes(keyword.toLowerCase()) )
                            {
                                return post;
                            }
                           }).map((product, index) => {
                            return (
                                <div className="col-lg-3 mb-5" key={index}>
                                    <div className="p-4">
                                        <h2 className="text-primary mb-3">{product.name}</h2>
                                        <img className="rounded" src={product.photo} height="200" width="100%" />
                                        <h5 className="m-3">
                                            <del className="text-danger m-3">Rs. {parseInt(product.price) + parseInt(product.price) * 10 / 100}</del>
                                            <ins className="text-primary m-3">Rs. {product.price}</ins>
                                        </h5>
                                        <p>{product.details}</p>
                                        <button onClick={addtocart.bind(this, product)} className="btn btn-danger btn-sm">Add to Cart</button>
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