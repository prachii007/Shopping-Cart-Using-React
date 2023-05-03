import { useState } from "react";
import Swal from "sweetalert2";

const Signup = () => {
    let [msg, updatemsg] = useState("Enter details to create an admin account");
    let [fullname, pickFullname] = useState("");
    let [email, pickEmail] = useState("");
    let [password, pickPassword] = useState("");
    let [confirmPass, pickConfirmPass] = useState("");
    let [passErrorMsg, updatePasswordErrorMsg] = useState("");
    let [emailErrorMsg, updateEmailErrorMsg] = useState("")
    let epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const sweetAlert = (data) => {
        Swal.fire({
            title: "Success",
            text: data,
            icon: "success",
            confirmButtonText: "OK",
            timer: 7000,
            timerProgressBar: true

        });
    }
    const sweetAlert2 = (text) => {
        Swal.fire({
            title: 'Oops...',
            text: text,
            icon: 'error',
            confirmButtonColor: '#dc3545', // Set the color of the confirm button
            confirmButtonText: 'OK' // Set the label of the confirm button
        })
    }

    const goSignup = () => {
        let formstatus = true;
        if (email == "" || password == "" || fullname == "") {
            sweetAlert2("All fields are compulsory")
            formstatus = false;
        }
        if (!epattern.test(email) || email == "") {
            updateEmailErrorMsg("Invalid Email ID")
            formstatus = false;
        } else {
            updateEmailErrorMsg("")
        }
        if (password !== confirmPass) {
            updatePasswordErrorMsg("Passwords don't match")
            formstatus =false
        }else{
            updatePasswordErrorMsg("")
        }
        if (formstatus === true) {
            updatemsg("Please wait Validating...");
            let url = "https://shopping-api-ypz4.onrender.com/account/";
            let adminData = {
                fullname: fullname,
                email: email,
                password: password
            }
            let postOption = {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(adminData)
            }
            fetch(url, postOption)
                .then(response => response.json())
                .then(serverRes => {
                    sweetAlert(`Welcome ${fullname}! Your account has been created. You can Login now!`)
                    let inputs = document.querySelectorAll("input");
                    inputs.forEach(input => input.value = '');
                })
        }
    }
    return (
        <section className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <p className="text-center text-danger">{msg}</p>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-lock"></i> Signup
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label>Full Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text"
                                    onChange={obj => pickFullname(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Email ID <span className="text-danger">*</span><span className="text-danger"> {emailErrorMsg}</span></label>
                                <input className="form-control" type="email"
                                    onChange={obj => pickEmail(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Password <span className="text-danger">*</span></label>
                                <input className="form-control" type="password"
                                    onChange={obj => pickPassword(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Confirm Password <span className="text-danger">*</span> <span className="text-danger">{passErrorMsg}</span></label>
                                <input className="form-control" type="password"
                                    onChange={obj => pickConfirmPass(obj.target.value)} />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={goSignup} className="btn btn-danger"> Signup <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Signup;