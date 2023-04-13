import { useState, useEffect } from "react";
const Signup = () => {
    return (
        <section className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <p className="text-center text-danger">Enter details to create an admin account</p>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-lock"></i> Signup
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label>Full Name</label>
                                <input className="form-control" type="text"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Email ID</label>
                                <input className="form-control" type="email"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input className="form-control" type="password"
                                />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-danger"> Signup <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Signup;