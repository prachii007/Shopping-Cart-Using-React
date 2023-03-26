import { HashRouter, Routes, Route } from "react-router-dom";
import Myhome from "./home";
import Login from "./login";
import Mycart from "./cart";
import Publicheader from "./publicheader";
const UserApp = () => {
    return (
        <HashRouter>
            <Publicheader />
            <Routes>
                <Route exact path="/" element={<Myhome />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/" element={<Mycart />} />
            </Routes>
        </HashRouter >
    )
}
export default UserApp;