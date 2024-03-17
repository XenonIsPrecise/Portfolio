import  { useState } from 'react';
import "./Navbar.css";
import Button from "./SillyComponents/Button";

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <div className="navbar">
                <div className="mylogo">
                    Sujal Acharya
                </div>
                <ul>
                    <li><Button text="Journey" url={"https://www.google.com"} /></li>
                    <li><Button text="About Me" /></li>
                    <li><Button text="Playground" /></li>
                </ul>
                <div className="toggle_btn" onClick={toggleDropdown}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </div>
            </div>
            {showDropdown && (
                <div className="dropdown_menu">
                    <ul>
                        <li><Button text="Journey" url={"https://www.google.com"} /></li>
                        <li><Button text="About Me" /></li>
                        <li><Button text="Playground" /></li>
                    </ul>
                </div>
            )}
        </>
    );
}
