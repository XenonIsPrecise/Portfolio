import "./Navbar.css";
import Button from "./SillyComponents/Button";


export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="mylogo">
                    Sujal Acharya
                </div>
                <ul>
                    <li><Button text="Journey" url={"https://www.google.com"}/></li>
                    <li><Button text="About Me"/></li>
                    <li><Button text="Playground"/></li>
                </ul>
                <div className="toggle_btn">
                    <span class="material-symbols-outlined">
                            menu 
                    </span>
                </div>
            </div>
            <div className="dropdown_menu">
                <ul>
                    <li><Button text="Journey" url={"https://www.google.com"}/></li>
                    <li><Button text="About Me"/></li>
                    <li><Button text="Playground"/></li>
                </ul>
            </div>

        </>
    )
}