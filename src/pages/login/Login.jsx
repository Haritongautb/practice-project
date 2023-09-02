import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import Form from "../../components/form/Form";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate("/")
            })
            .catch(() => alert("Nieprawidłowy użytkownik!"))
    }
    return (
        <section className="auth login">
            <div className="container">
                <div className="login__inner">
                    <h1 className="login__title main-title">Strona logowania</h1>

                    <Form title="zaloguj się" handleClick={handleLogin} />
                </div>
            </div>
        </section>
    )
}

export default Login;