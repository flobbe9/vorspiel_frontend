import React, { useEffect } from "react";
import "../../styles/StylePanelColor.css";
import { updateCurrentTextInputStyle } from "./StylePanel";


/**
 * @param props.styleAttributeCSS name of the style attribute to change, using the standard CSS name (e.g. font-size)
 * @param props.styleValueDefault default style value to use in style panel, if no text input is selected yet
 * @since 0.0.1 
 */
export default function StylePanelColor(props: {
    styleAttributeCSS: string,
    styleValueDefault: string
}) {


    useEffect(() => {
        // use red on render
        toggleColor("#f00000")
    }, [])


    function handleChange(event) {

        const isTextInputSelected = updateCurrentTextInputStyle(event, props.styleAttributeCSS, props.styleValueDefault);

        if (isTextInputSelected)
            toggleColor((event.target as HTMLInputElement).value);
    }


    return (
        <div className="StylePanelColor">
            A
            <input className="stylePanelInput" 
                    type="color" 
                    name="color"
                    onChange={handleChange} />
        </div>
    );
}


export function toggleColor(color: string): void {

    const thisComponent = document.getElementsByClassName("StylePanelColor")[0] as HTMLElement;
    thisComponent.style.textDecorationColor = color;
}