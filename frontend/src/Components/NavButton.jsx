import "../css/NavButton.css";
import "../Helper/ButtonEffects";
import { FlashBorder } from "../Helper/ButtonEffects";


function NavButton({ text, uniqueButton }) {

    const primaryBorderFlash = FlashBorder(
        '--hex-bg',
        '--hex-highlight',
        5,
        100,
        1.2
    );

    const secondaryBorderFlash = FlashBorder(
        '--hex-bg',
        '--hex-highlight-scnd',
        5,
        100
    );

    let myStyle = {};

    //primary and secondary NavButton css control
    if (uniqueButton === true) {
        myStyle = {
            border: `3px solid ${secondaryBorderFlash}`,
            boxShadow: `var(--glow-secondary)`
        };
    } else {
        myStyle = {
            border: `3px solid ${primaryBorderFlash}`,
            boxShadow: `var(--glow-primary)`
        };
    }

    return (
        <div className="nav-button-container">
            <button className="nav-button" style={myStyle}>
                <span className="nav-button-text">{text}</span>
            </button>
        </div>
    )
}

export default NavButton;