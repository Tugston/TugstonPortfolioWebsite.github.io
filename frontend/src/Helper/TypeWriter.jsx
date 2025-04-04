import { useState, useEffect, useRef } from "react";

export const PlainTypeWritterEffect = (text, speed) => {
    const [displayText, setDisplayText] = useState("");
    const index = useRef(0);
    const displayTextRef = useRef("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (index.current < text.length) {
                displayTextRef.current += text.charAt(index.current);
                setDisplayText(() => displayTextRef.current);
                index.current++;
            } else {
                clearInterval(interval); //clear the interval when done typing
            }
        }, speed);

        return () => {
            setDisplayText("");
            clearInterval(interval);
        };
    }, [text, speed]);
    return displayText;
}

export const MiddleTypeWritterEffect = (text, speed) => {
    const [displayText, setDisplayText] = useState("");
    const leftIndex = useRef(Math.floor(text.length / 2));
    const rightIndex = useRef(Math.floor(text.length / 2) + 1); //start 1 letter ahead for the right side
    let displayTextRef = useRef("");

    //invalid start location
    if (rightIndex > text.length || leftIndex < 0)
        return;

    useEffect(() => {
        const interval = setInterval(() => {

            if (leftIndex.current > 0) leftIndex.current--;
            if (rightIndex.current < text.length) rightIndex.current++;

            displayTextRef = text.slice(leftIndex.current, rightIndex.current);
            setDisplayText(displayTextRef);

            //check to see if both directions are finished, since some words could be odd letters
            if (rightIndex.current === text.length && leftIndex.current === 0) {
                clearInterval(interval);
            }
        }, speed);

        return () => {
            setDisplayText("");
            clearInterval(interval);
        }
    }, [text, speed]);

    return displayText;
}
