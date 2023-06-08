import React from 'react';
import styles from './App.module.scss';
import { SearchWidget } from './widgets/SearchWidget';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <SearchWidget />
    </div>
  );
};

export default App;
