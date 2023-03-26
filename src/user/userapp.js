import Myhome from "./home";
import Login from "./login";
import Mycart from "./cart";
import Publicheader from "./publicheader";
const userApp = () => {
    return (
        <>
            <Myhome />
            <Login/>
            <Mycart/>
            <Publicheader/>
        </>
    )
}
export default userApp;