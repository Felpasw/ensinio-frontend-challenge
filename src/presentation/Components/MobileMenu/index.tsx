import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import * as S from './styles';

import { NavItemsList } from '../../../textContent';

import UserProfileLogo from '../../../assets/UserProfileLogo';
import IconBrazil from '../../../assets/IconBrazil';
import IconTriangle from '../../../assets/IconTriagle';
import EnsionioLogo from '../../../assets/EnsinioLogo';
import IconMenu from '../../../assets/IconMenu';
import IconClose from '../../../assets/IconClose';
import IconEad from '../../../assets/IconEad';
import IconApp from '../../../assets/IconApp';
import IconGamification from '../../../assets/IconGamification';
import IconSocial from '../../../assets/IconSocial';

const solutionsList = [
  {
    icon: <IconEad />,
    title: 'Crie uma Escola Online',
    descripton: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: <IconGamification />,
    title: 'Gamificação',
    descripton: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: <IconSocial />,
    title: 'Comunidade e rede social',
    descripton: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: <IconApp />,
    title: 'Aplicativo mobile',
    descripton: 'Lorem ipsum dolor sit amet',
  },
];

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [languageIsVisible, setLanguageIsVisible] = useState(false);
  const [solutionIsVisible, setSolutionIsVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <S.Content>
        <S.Logo>
          <EnsionioLogo />
        </S.Logo>

        <S.MenuIcon
          whileTap={{
            scale: 1.5,
          }}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <IconMenu />
        </S.MenuIcon>
      </S.Content>

      {isVisible && (
        <S.Nav>
          <S.TopContent>
            <S.RightTopContent>
              <S.CurrentLanguage
                onClick={() => setLanguageIsVisible(!languageIsVisible)}
              >
                <IconBrazil />
                <h4>PT </h4>
                <IconTriangle />
              </S.CurrentLanguage>
              {languageIsVisible && <>cuzinho</>}
              <hr style={{ height: '20px', alignSelf: 'center' }} />

              <S.CloseMenuIcon
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{
                  scale: 1.5,
                }}
              >
                <IconClose />
              </S.CloseMenuIcon>
            </S.RightTopContent>

            <S.LeftTopContent>
              <S.UserProfileLogo>
                <UserProfileLogo />
              </S.UserProfileLogo>

              <h4>Entrar</h4>
            </S.LeftTopContent>
          </S.TopContent>

          <S.MenuContent>
            <S.SolutionsDropdown
              onClick={() => setSolutionIsVisible(!solutionIsVisible)}
            >
              <hr style={{ borderColor: '#41b5d9', width: '100%' }} />
              Soluções <IconTriangle />
            </S.SolutionsDropdown>
            {solutionIsVisible &&
              solutionsList.map((element) => (
                <>
                  {element.title} {element.icon}
                  {element.descripton}
                </>
              ))}

            {NavItemsList.map((element) => (
              <S.MenuOption>
                <hr style={{ borderColor: '#41b5d9', width: '100%' }} />
                {element.content}
              </S.MenuOption>
            ))}
          </S.MenuContent>
          <S.Button> Começar agora</S.Button>
        </S.Nav>
      )}
    </AnimatePresence>
  );
}
