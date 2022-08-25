import React, { useState, useEffect } from 'react';
import VulpesContext from '../contexts/VulpesContext';

export default function VulpesProvider({ children, theme = 'gogood' }) {
  const [_theme, setTheme] = useState(null);
  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return (
    <VulpesContext.Provider value={{ theme: _theme, setTheme }}>
      {children}
    </VulpesContext.Provider>
  );
}
