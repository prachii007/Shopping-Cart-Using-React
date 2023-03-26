import Myhome from "./home";
import Login from "./login";
import Mycart from "./cart";
import Publicheader from "./publicheader";
const UserApp = () => {
    return (
        <>
            <Publicheader />
            <Myhome />
            <Login />
            <Mycart />
        </>
    )
}
export default UserApp;