import { Link } from "react-router-dom";

const Adminheader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-info p-3 sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><i className="fa fa-shopping-bag fa-lg"></i> React Shopping App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" aria-current="page" to=""><i className="fa fa-cogs"></i> Dashboard</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/order"><i className="fa fa-suitcase-cart"></i> My Order</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/product"><i className="fa fa-table"></i> All Products</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/addproduct"><i className="fa fa-plus"></i> Add Products</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <a onClick={logout} className="nav-link text-danger">Welcome {localStorage.getItem("adminname")} <i className="fa fa-power-off"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Adminheader;

const logout = () => {
    localStorage.clear();
    window.location.reload();
}