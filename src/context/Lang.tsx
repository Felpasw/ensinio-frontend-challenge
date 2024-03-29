import { useState, createContext } from 'react';

import { Lang, LangContextType } from '../@types/lang';

const StartLang: Lang = 'pt';

export const LanguageContext = createContext<LangContextType>(
  {} as LangContextType
);

export default function LangContext(Props: { children: JSX.Element }) {
  const [currentLanguage, setCurrentLanguage] = useState<Lang>(StartLang);

  const contextValue: LangContextType = {
    state: currentLanguage,
    setState: setCurrentLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {Props.children}
    </LanguageContext.Provider>
  );
}
