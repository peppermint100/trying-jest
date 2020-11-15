import React, { useState } from "react";

const App:React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState("light");

    const toggleTheme = () => {
        setCurrentTheme("dark");
    }

    return(
        <div id="app">
            <header>TDD App</header>
            <button onClick={toggleTheme}>BUTTON</button>
            <p id="current-theme">{currentTheme}</p>
        </div>
    )
}

export default App;