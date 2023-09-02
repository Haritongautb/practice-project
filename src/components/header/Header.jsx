import React from "react";
import Navbar from "../navbar/Navbar";

const Header = ({ isOpen, setIsOpen }) => {

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header__inner">
                    <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
                </div>
            </div >
        </header >
    )

}

export default Header;