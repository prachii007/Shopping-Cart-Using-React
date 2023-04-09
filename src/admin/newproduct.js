import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Newproduct = () => {
    
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary">Enter New Product Details</h1>
                    <ToastContainer />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label>Enter Product Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Price/Unit</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Photo URL</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Product Details</label>
                        <textarea type="text" className="form-control"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger">Save Product</button>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </section>
    )

}
export default Newproduct;