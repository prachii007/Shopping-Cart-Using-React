import { HashRouter, Routes, Route } from "react-router-dom";
import Mydashboard from "./dashboard";
import Myorder from "./order";
import Myproduct from "./product";
import Newproduct from "./newproduct";
import Adminheader from "./adminheader";

const AdminApp =()=>{
    <HashRouter>
    <Publicheader />
    <Routes>
        <Route exact path="/" element={<Mydashboard />} />
        <Route exact path="/login" element={<Myorder />} />
        <Route exact path="/cart" element={<Myproduct />} />
        <Route exact path="/cart" element={<Newproduct />} />

    </Routes>
</HashRouter >
}
export default AdminApp;