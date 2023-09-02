import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import Form from "../../components/form/Form";
import MainTitle from "../../components/main-title/MainTitle";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate("/");
            })
            .catch(() => alert("Nieprawidłowy użytkownik!"))
    }

    return (
        <section className="auth login">
            <div className="container">
                <div className="login__inner">
                    <MainTitle text="Strona rejestracji" />

                    <Form title="zarejestruj się" handleClick={handleRegister} />
                </div>
            </div>
        </section>
    )
}

export default Signup;