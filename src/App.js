import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./Timer";

class App extends React.Component {
  

  render() {
    return (
      <div>
        <h1>
          <Timer />
        </h1>
        
      </div>
    );
  }
}

export default App;
