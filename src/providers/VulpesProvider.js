import React, { useState } from 'react';
import VulpesContext from '../contexts/VulpesContext';

export default function VulpesProvider({ children, theme }) {
  const [_theme, setTheme] = useState(theme ? theme : 'gogood');

  return (
    <VulpesContext.Provider value={{ theme: _theme, setTheme }}>
      {children}
    </VulpesContext.Provider>
  );
}
