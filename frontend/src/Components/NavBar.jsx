import NavButton from "./NavButton";
import { PlainTypeWritterEffect } from "../Helper/TypeWriter";
import { MiddleTypeWritterEffect } from "../Helper/TypeWriter";
import '../css/NavBar.css'

function ToggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function NavBar() {
    // const [isMenuActive, setIsMenuActive] = useState(false);

    const iconText = MiddleTypeWritterEffect(
        "<Vincent Pierce>",
        75
    )


    /*const iconText = PlainTypeWritterEffect(
        "Vincent Pierce",
        100
    )*/

    return (
        <div className="navbar">
            <span className="logo-name">{iconText}</span>
            <div className="links-section">
                <NavButton text="About Me" uniqueButton={true} />
                <NavButton text="Education" uniqueButton={false} />
                <NavButton text="Projects" uniqueButton={false} />
            </div>
            <div className="hamburger-menu" onClick={ToggleMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div>
        </div>
    )
}

export default NavBar;