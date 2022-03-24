import React, {useState} from 'react';
import './Box.css';

export default function Box(props){
    let className = "box"
    const [color, setColor] = useState(false)

    if (color === false) {
        className += " " + "white"
    } else if (color == true) {
        className += " " + "black"
    }

    function changeColor(){
        if (color === false) {
            setColor(true);
            props.countCheck(1);
        } else if (color == true) {
            setColor(false)
            props.countCheck(-1);
        }
    }

    return(
        <div className = {className} onClick={changeColor}>
        </div>
    )
}