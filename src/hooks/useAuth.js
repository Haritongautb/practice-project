import { useSelector } from "react-redux";
import { useUserSelect } from "../store/slices/userSlice";
function useAuth() {
    const { email, id, token } = useSelector(useUserSelect);

    return {
        isAuth: !!email,
        email,
        id,
        token
    }
}

export default useAuth;