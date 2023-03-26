const Login = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-lock"></i> Login
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label>Email ID</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input className="form-control" type="password"/>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-danger"> Login <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </section>
    )
}
export default Login;