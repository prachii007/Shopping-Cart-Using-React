import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Newproduct = () => {
    let [pname, pickName] = useState("");
    let [pprice, pickPrice] = useState("");
    let [pphoto, pickPhoto] = useState("");
    let [pdetails, pickDetails] = useState("");

    const save = () => {
        let sellerid = localStorage.getItem("sellerid");
        alert(pname + pprice + pdetails + pphoto)
    }
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
                        <input type="text" className="form-control"
                            value={pname} onChange={obj => pickName(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Enter Price/Unit</label>
                        <input type="number" className="form-control"
                            value={pprice} onChange={obj => pickPrice(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Enter Photo URL</label>
                        <input type="text" className="form-control"
                            value={pphoto} onChange={obj => pickPhoto(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Enter Product Details</label>
                        <textarea type="text" className="form-control"
                            value={pdetails} onChange={obj => pickDetails(obj.target.value)}>
                        </textarea>
                    </div>
                    <div className="text-center">
                        <button onClick={save} className="btn btn-danger">Save Product</button>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </section >
    )

}
export default Newproduct;