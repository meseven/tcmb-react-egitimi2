import { createContext, useState } from 'react';

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('tr-TR');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
