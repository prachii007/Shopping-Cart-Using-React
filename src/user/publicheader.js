import { Link } from "react-router-dom";

const Publicheader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><i className="fa fa-shopping-bag fa-lg"></i> React Shopping App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" aria-current="page" to="#"><i className="fa fa-home"></i> Shopping</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/cart"><i className="fa fa-shopping-cart"></i>My Cart</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/login"><i className="fa fa-lock"></i> Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Publicheader;