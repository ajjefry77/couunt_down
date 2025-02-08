import React from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './Timer';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    time is
                </h1>
                <Timer/>
            </div>
        )
    }
}

export default App