import UserApp from "./user/userapp";
import AdminApp from "./admin/adminapp";
function App() {
  if (localStorage.getItem("sellerid") == null) { //variable sellerid is created. Asked if it is equal to null?
    return (< UserApp />);
  } else {
    return (< AdminApp />);
  }
}

export default App;
