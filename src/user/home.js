import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Myhome = () => {
    //fetch data of the product array form the api by making a GET Request,
    //parse the data into json
    //update the allproduct with the product array received as respone from the api
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

    const addtocart = (product) => { //product is the individual element of the allproduct array, it an object that has details of each product
        product["qty"] = 1; //add a new key-value pair to the product object
        //Make a POST request to the api
        //Only send the details of those product items that were added to the cart
        let url = "http://localhost:1234/cart";
        let postOption = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(product)
        };
        fetch(url, postOption)
            .then(response => response.json)
            .then(serverStatus => {
                alert("Item added in cart");
            })
    }
    //search bar
    let [keyword, updateKeyword] = useState("");

    //pagination starts
    const PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allproduct.length / PER_PAGE);
    //pagination ends

    return (
        <main>
            <section id="banner">React Shopping App</section>
            <section className="container mt-4">
                <div className="row mb-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        {/* capture the words that user types in the search bar.*/}
                        <input onChange={obj => updateKeyword(obj.target.value)} className="form-control" type="text" placeholder="Search here" />
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row text-center">
                    {/* First filter those elements of the allproduct array that have the name which was typed in the search bar.
                    Use slice method so that atmost 5 products are visible on the screen.
                    Use map method so that those products that pass the test of the filter method are displayed on the webpage
                     */}
                    {
                        allproduct.filter(post => {
                            if (post.name.toLowerCase().includes(keyword.toLowerCase())) {
                                return post;
                            }
                        }).slice(offset, offset + PER_PAGE).map((product, index) => {
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
                <div className="mb-4 mt-4">
                    {/* Pagination code */}
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination  justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active primary"}
                    />
                </div>
            </section>
        </main>
    )
}
export default Myhome;