import { useState } from 'react';
import styles from './search.module.scss';
import React from 'react';

interface InputProps {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<InputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue);
    setInputValue('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      className={styles.searchContainer}
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <input
        className={styles.searchContainer_input}
        type="text"
        placeholder="Search username..."
        value={inputValue}
        onChange={handleInputChange}
        data-testid="search-input"
      />
      <button
        className={styles.searchContainer_button}
        type="submit"
        data-testid="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
