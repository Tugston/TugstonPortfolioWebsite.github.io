
import { useEffect, useRef, useState } from "react";
import { useNavBarComponent } from "../../Helper/FetchDeviceComponents";

import '../../css/Pages/HomePage.css';
import '../../css/Pages/PageGeneral.css';

function HomepageHeroSection() {
    const [text, setText] = useState("");
    const [typingFinished, setTypingFinished] = useState(false);
    const [textErased, setTextErased] = useState(false);
    const [typing, setTyping] = useState(true);
    const [selectedOccupation, setSelectedOccupation] = useState("");
    const previousOccupation = useRef("");



    const occupations = [
        "Programmer",
        "Game Developer",
        "Engine Developer",
        "Web Developer",
        "Freelancer",
        "IT Student"
    ];

    //could not figure out how to implement this with the TextEffects I have...
    //so making it custom in here.

    // pick first occupation on load
    useEffect(() => {
        let randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        setSelectedOccupation(randomOccupation);
    }, []);

    // typewriter effect
    useEffect(() => {
        if (typing && selectedOccupation && text.length < selectedOccupation.length) {
            const timeout = setTimeout(() => {

                setText(prev => prev + selectedOccupation[prev.length]);
            }, 100); // speed of typing

            return () => clearTimeout(timeout);
        } else if (typing && text.length === selectedOccupation.length) {
            const timeout = setTimeout(() => {

                setTypingFinished(true);
            }, 1000); // pause after typing complete
            return () => clearTimeout(timeout);
        }
    }, [text, typing, selectedOccupation]);

    // erasing effect
    useEffect(() => {

        if (!typing && text.length > 0) {

            const timeout = setTimeout(() => {

                setText(prev => prev.slice(0, -1));
            }, 75); // speed of erasing
            return () => clearTimeout(timeout);
        } else if (!typing && text.length === 0 && selectedOccupation) {

            const timeout = setTimeout(() => {
                setTextErased(true);
            }, 500); // pause after erase complete

            return () => clearTimeout(timeout);
        }
    }, [text, typing]);

    // handle phase changes
    useEffect(() => {
        if (typingFinished) {
            setTyping(false);
            setTypingFinished(false);
        }

        if (textErased) {
            const newOccupation = occupations[Math.floor(Math.random() * occupations.length)];
            setSelectedOccupation(newOccupation);
            setText("");
            setTyping(true);
            setTextErased(false);
        }
    }, [typingFinished, textErased]);

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256) + 30;
        const g = Math.floor(Math.random() * 256) + 30;
        const b = Math.floor(Math.random() * 256) + 30;
        return `rgb(${r}, ${g}, ${b})`;
    }

    return (
        <>
            <section>
                <div className="hero-container section flex-container">
                    <h1 className="section-header-text upcase-text">Hello!<br />I'm <br /><strong className="hero-name upcase-text" data-text="Vincent Pierce">Vincent Pierce</strong>
                    </h1>
                    <div className="occupation-text-container">
                        <span className="hero-description section-sub-heading-text upcase-text">I am a: <br /></span>
                        <div className="flex-container occupation-typing-box">
                            <h2 id="occupation-text" className="section-body-text upcase-text" style={{ color: randomColor() }}>{text}<span className="home-typing-icon">▐</span></h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageHeroSection;