import React, { createContext, useContext, useState } from 'react';

// Создаем контекст поиска
const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);
// Компонент-провайдер контекста

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <SearchContext.Provider value={{ searchText, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

