import React from "react";
import styles from "./App.module.scss";
import { SearchWidget } from "./widgets/SearchWidget";

const App: React.FC = () => {
  let test = false;
  return (
    <div className={`${styles.App} ${test ? styles.Bep : ""}`}>
      <SearchWidget />
    </div>
  );
};

export default App;
