import React, { Component } from "react";

import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Layout>Elo</Layout>
        </header>
      </div>
    );
  }
}

export default App;
