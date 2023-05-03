import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const Newproduct = () => {
    let [pname, pickName] = useState("");
    let [pprice, pickPrice] = useState("");
    let [pphoto, pickPhoto] = useState("");
    let [pdetails, pickDetails] = useState("");
    let [pphotoType, pickPhotoType] = useState("");

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
        if (pname === "" || pprice === "" | pphoto === "" || pdetails === "") {
            formstatus = false;
            sweetAlert2("All fields are compulsory")
        }
        if (formstatus === true) {
            let sellerid = localStorage.getItem("sellerid");
            let url = "https://shopping-api-ypz4.onrender.com/product";
            let pinfo = {
                "name": pname,
                "price": pprice,
                "photo": {
                    [pphotoType]: pphoto
                },
                "details": pdetails,
                "seller": sellerid
            };
            let postoption = {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(pinfo)
            }
            fetch(url, postoption)
                .then(response => response.json())
                .then(serverRes => {
                    toast(pname + " Saved Successfully")
                    pickName("");
                    pickPrice("");
                    pickDetails("");
                    pickPhoto("");
                })
        }
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
                        <label>Enter Product Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" maxLength={16}
                            value={pname} onChange={obj => pickName(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Enter Price/Unit <span className="text-danger">*</span></label>
                        <input type="number" className="form-control"
                            value={pprice} onChange={obj => pickPrice(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>
                            Where is your photo located? <span className="text-danger">*</span> 
                        </label>
                        <select className="form-select" onChange={obj => pickPhotoType(obj.target.value)}>
                            <option>--Choose Any One--</option>
                            <option value="local">Locally On This Website</option>
                            <option value="absolute">Globally On The Internet</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Enter Photo URL <span className="text-danger">*</span> <span className="fw-italic text-success">For local images write 1.jpg, 2.jpg, ---, 12.jpg</span></label>
                        <input type="text" className="form-control"
                            value={pphoto} onChange={obj => pickPhoto(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Enter Product Details <span className="text-danger">*</span></label>
                        <textarea type="text" className="form-control" maxLength={30}
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