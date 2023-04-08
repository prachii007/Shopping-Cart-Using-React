import { HashRouter, Routes, Route } from "react-router-dom";
import Mydashboard from "./dashboard";
import Myorder from "./order";
import Myproduct from "./product";
import Newproduct from "./newproduct";
import Adminheader from "./adminheader";

const AdminApp = () => {
    return (
        <HashRouter>
            <Adminheader />
            <Routes>
                <Route exact path="/" element={<Mydashboard />} />
                <Route exact path="/order" element={<Myorder />} />
                <Route exact path="/product" element={<Myproduct />} />
                <Route exact path="/addproduct" element={<Newproduct />} />
            </Routes>
        </HashRouter >
    )
}
export default AdminApp;