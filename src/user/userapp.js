import { HashRouter, Routes, Route } from "react-router-dom";
import Myhome from "./home";
import Login from "./login";
import Mycart from "./cart";
import Publicheader from "./publicheader";
import Signup from "./signup";
const UserApp = () => {
    return (
        <HashRouter>
            <Publicheader />
            <Routes>
                <Route exact path="/" element={<Myhome />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cart" element={<Mycart />} />
                <Route exact path="/signup" element={<Signup/>} />
            </Routes>
        </HashRouter >
    )
}
export default UserApp;