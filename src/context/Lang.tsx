import React from 'react';
import { Lang } from '../@types/lang';

export default function LangContext(props: { children: JSX.Element }) {
  const [currentLanguage, setCurrtentLanguage] = React.useState('pt');
  const LangContext = React.createContext(currentLanguage);
  const UpdateLanguage = React.createContext(setCurrtentLanguage);

  return (
    <LangContext.Provider value={currentLanguage}>
      <UpdateLanguage.Provider value={setCurrtentLanguage}>
        {props.children}
      </UpdateLanguage.Provider>
    </LangContext.Provider>
  );
}
