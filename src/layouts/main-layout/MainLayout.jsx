import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

const MainLayout = ({ isOpen, setIsOpen }) => {
    return (
        <div className="wrapper">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <main className="main">
                <Outlet />
            </main>
        </div>
    )

}

export default MainLayout;