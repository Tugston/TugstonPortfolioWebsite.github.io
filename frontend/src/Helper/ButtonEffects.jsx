import { useState, useEffect, useRef } from "react";

const BackgroundGlow = (speed, finishedFlashing) => {
    //const [glowColor, setGlowColor] = useState('');
    const [glowSpread, setGlowSpread] = useState(0);
    const [glowSpreadCompleted, setGlowSpreadComplete] = useState(false);

    if (finishedFlashing) {
        useEffect(() => {
            const glowProgress = setInterval(() => {
                if (glowSpread < 20) {
                    setGlowSpread(glowSpread + 0.5); //increase glow spread over time
                } else {
                    clearInterval(glowProgress);
                    setGlowSpreadComplete(true);
                }
            }, speed);

            return () => clearInterval(glowProgress);
        }, [glowSpread, speed]);

        const glowStyle = {};

        //use the predefined glow if it is completed, and use the progressive glow if it is not completed
        if (glowSpreadCompleted) {
            glowStyle = {
                boxShadow: `var(--glow-primary)`
            }
        } else {
            glowStyle = {
                boxShadow: `0 0 ${glowSpread}px ${glowSpread / 2}px ${glowColor}`
            }
        }

        return glowStyle;
    }

}

export const FlashBorder = (offVarColorName, VarFinalColorName, amntOfFlashes, speed) => {
    const [flashColor, setFlashColor] = useState('');
    const flashAmnt = useRef(0);

    useEffect(() => {

        //retrieve the variable values
        const getCSSVar = (varName) =>
            getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

        const offColor = getCSSVar(offVarColorName);
        const finalColor = getCSSVar(VarFinalColorName);

        flashAmnt.current = 0;
        setFlashColor(offColor);

        const flash = setInterval(() => {

            //flash until hitting the amount of flashes, then hold the final color
            if (flashAmnt.current < amntOfFlashes) {

                flashAmnt.current++;

                setFlashColor(flashAmnt.current % 2 === 0 ? 'white' : offColor);

            } else {
                setFlashColor(finalColor);
                clearInterval(flash);
            };

        }, speed);

        return () => {
            clearInterval(flash);
            setFlashColor(offColor);
        };

    }, [offVarColorName, VarFinalColorName, amntOfFlashes, speed]);

    return flashColor;
}

export const EaseOutFlashBorder = (offVarColorName, offVarFinalColorName, amntOfFlashes, speed, speedMultiplier) => {
    const [flashColor, setFlashColor] = useState('');
    const flashAmnt = useRef(0);
    const currentSpeed = useRef(speed);

    useEffect(() => {

        //retrieve the variable values
        const getCSSVar = (varName) =>
            getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

        const offColor = getCSSVar(offVarColorName);
        const finalColor = getCSSVar(offVarFinalColorName);

        flashAmnt.current = 0;
        setFlashColor(offColor);

        const flash = () => {

            //flash until hitting the amount of flashes, then hold the final color
            if (flashAmnt.current < amntOfFlashes) {

                flashAmnt.current++;

                if (flashAmnt.current % 2 === 0) {
                    setFlashColor('white');
                    currentSpeed.current *= speedMultiplier;
                } else {
                    setFlashColor(offColor);
                }

                setTimeout(flash, currentSpeed.current);

                console.log("flash called");

            } else {
                setFlashColor(finalColor);
            };

        };

        flash();

        return () => {
            setFlashColor(offColor);
        };

    }, [offVarColorName, offVarFinalColorName, amntOfFlashes, speed, speedMultiplier]);

    return flashColor;
}

export const WrapBorder = (finalColor, speed, percentage) => {
    const [borderPercent, setBorderPercent] = useState(0);
    const requestRef = useRef();

    useEffect(() => {
        const animate = () => {
            setBorderPercent((prev) => {
                const diff = percentage - prev;

                if (Math.abs(diff) < 0.5) return percentage; //just snap to the final value

                const step = diff * 0.1;
                return prev + step;
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, [percentage]);

    //border fill logic
    const clamped = Math.max(0, Math.min(borderPercent, 100));
    const totalLength = 4 * 100;
    const lengthToDraw = (clamped / 100) * totalLength;

    const bottom = Math.min(lengthToDraw, 100);
    const right = Math.min(Math.max(lengthToDraw - 100, 0), 100);
    const top = Math.min(Math.max(lengthToDraw - 200, 0), 100);
    const left = Math.min(Math.max(lengthToDraw - 300, 0), 100);

    return (
        <div className="nav-button-div">
            <div className="bottom-border" style={{ width: '${bottom}', height: '3rem' }} />
            <div className="right-border" style={{ width: '3rem', height: '${right}' }} />
            <div className="left-border" style={{ width: '3rem', height: '${left}' }} />
            <div className="top-border" style={{ width: '${top}', height: '3rem' }} />
        </div>

    )
}
