import React from "react";
import "./App.css";
import { GithubProvider } from "./GithubContext";

import Header from "./components/Header";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <div className="App">
      <Header title="Github user searcher" />
      <GithubProvider>
        <UserSearch />
      </GithubProvider>
    </div>
  );
}

export default App;
