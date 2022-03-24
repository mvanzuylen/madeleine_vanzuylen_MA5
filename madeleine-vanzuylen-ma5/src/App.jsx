import React, {useState} from 'react';
import Box from './Box'
import './App.css';

function App() {
    //const [isColor, changeColor] = useState(false);
    const [count, changeCount] = useState(0);

    return(
        <div>
            <h1>Count: {count}</h1>
            <div class="container">
                <Box countCheck={(newCount) => changeCount(count + newCount)}/>
                <Box countCheck={(newCount) => changeCount(count + newCount)}/>
                <Box countCheck={(newCount) => changeCount(count + newCount)}/>
                <Box countCheck={(newCount) => changeCount(count + newCount)}/>
            </div>
        </div>
    );
}

export default App;


//onColorCheck={(whichColor) => changeColor(whichColor)}
