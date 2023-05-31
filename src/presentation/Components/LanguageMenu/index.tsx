import IconBrazil from '../../../assets/IconBrazil';
import IconChecked from '../../../assets/IconChecked';
import IconSpain from '../../../assets/IconSpain';
import IconUSA from '../../../assets/IconUSA';
import { LanguageContext } from '../../../context/Lang';
import { useContext } from 'react';
import * as S from './styles';

export default function LanguageMenu() {
  const lang = useContext(LanguageContext);

  return (
    <S.LaguagesContainer
      data-testid="LanguageMenu"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <S.LanguagesItem
        data-testid="LanguagePT"
        onClick={() => lang.setState('pt')}
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <IconBrazil /> <h2 style={{ fontSize: '2vh' }}>PT</h2>
        {lang.state === 'pt' && <IconChecked testid="checked-pt" />}
      </S.LanguagesItem>

      <S.LanguagesItem
        data-testid="LanguageEN"
        onClick={() => lang.setState('en')}
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <IconUSA /> <h2 style={{ fontSize: '2vh' }}>EN</h2>
        {lang.state === 'en' && <IconChecked testid="checked-en" />}
      </S.LanguagesItem>

      <S.LanguagesItem
        data-testid="LanguageES"
        onClick={() => lang.setState('es')}
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <IconSpain /> <h2 style={{ fontSize: '2vh' }}>ES</h2>
        {lang.state === 'es' && <IconChecked testid="checked-es" />}
      </S.LanguagesItem>
    </S.LaguagesContainer>
  );
}
