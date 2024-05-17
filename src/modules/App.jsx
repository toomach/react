import './App.css'

import { useState, useEffect } from 'react';




const App = () => {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        document.title = 'You clicked ${clicks} times';
    });
    
    return (
        <button onClick={() => setClicks(clicks + 1)}>
            You clicked {clicks} times
    </button>
)
};      
 

export default App
