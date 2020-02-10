import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placehold="Enter Text" />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
