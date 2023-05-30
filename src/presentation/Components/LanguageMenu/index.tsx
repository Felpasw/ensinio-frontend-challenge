import IconBrazil from '../../../assets/IconBrazil';
import IconChecked from '../../../assets/IconChecked';
import IconSpain from '../../../assets/IconSpain';
import IconUSA from '../../../assets/IconUSA';
import { LanguageContext } from '../../../context/Lang';
import { useContext } from 'react';
import * as S from './styles';

export default function LanguageMenu() {
  const lang = useContext(LanguageContext);

  return lang.state === 'pt' ? (
    <S.LaguagesContainer
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
        <IconChecked />
      </S.LanguagesItem>

      <S.LanguagesItem
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
        <S.NotVIsible>
          <IconChecked />
        </S.NotVIsible>
      </S.LanguagesItem>

      <S.LanguagesItem
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
        <S.NotVIsible>
          <IconChecked />
        </S.NotVIsible>
      </S.LanguagesItem>
    </S.LaguagesContainer>
  ) : lang.state === 'en' ? (
    <S.LaguagesContainer
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
        <S.NotVIsible>
          <IconChecked />
        </S.NotVIsible>
      </S.LanguagesItem>

      <S.LanguagesItem
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
        <IconChecked />
      </S.LanguagesItem>

      <S.LanguagesItem
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
        <IconSpain />
        <h2 style={{ fontSize: '2vh' }}>ES</h2>
        <S.NotVIsible>
          <IconChecked />
        </S.NotVIsible>
      </S.LanguagesItem>
    </S.LaguagesContainer>
  ) : (
    <S.LaguagesContainer
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
        <S.NotVIsible>
          <IconChecked />
        </S.NotVIsible>
      </S.LanguagesItem>

      <S.LanguagesItem
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
        <S.NotVIsible>
          <IconChecked />
        </S.NotVIsible>
      </S.LanguagesItem>

      <S.LanguagesItem
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
        <IconChecked />
      </S.LanguagesItem>
    </S.LaguagesContainer>
  );
}
