import { Dispatch, SetStateAction } from 'react';

export type Lang = 'pt' | 'en' | 'es';

export type LangContextType = {
  state: Lang;
  setState: Dispatch<SetStateAction<Lang>>;
};

export type items = {
  id: number;
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
};
