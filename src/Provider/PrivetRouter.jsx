import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation } from "react-router-dom";

const PrivetRouter = ({children})=>{
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <h2 className="text-7xl font-bold text-center">Loading....</h2>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}
export default PrivetRouter;