import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';

import * as S from './styles';
import * as textContent from '../../../textContent';

import { NavItemsList } from '../../../textContent';

import UserProfileLogo from '../../../assets/UserProfileLogo';
import IconBrazil from '../../../assets/IconBrazil';
import IconTriangle from '../../../assets/IconTriagle';
import EnsionioLogo from '../../../assets/EnsinioLogo';
import IconMenu from '../../../assets/IconMenu';
import IconClose from '../../../assets/IconClose';

import { LangContextType } from '../../../@types/lang';
import { LanguageContext } from '../../../context/Lang';
import IconUSA from '../../../assets/IconUSA';
import IconSpain from '../../../assets/IconSpain';
import LanguageMenu from '../LanguageMenu';

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [languageIsVisible, setLanguageIsVisible] = useState(false);
  const [solutionIsVisible, setSolutionIsVisible] = useState(false);
  const lang: LangContextType = useContext(LanguageContext);

  return (
    <AnimatePresence>
      <S.Content
        data-testid="MobileMenu"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <S.Logo>
          <EnsionioLogo />
        </S.Logo>

        <S.MenuIcon
          data-testid="MenuButton"
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
        <S.Nav data-testid="menuHidden">
          <S.TopContent>
            <S.RightTopContent>
              <S.CurrentLanguage
                onClick={() => setLanguageIsVisible(!languageIsVisible)}
              >
                {lang.state === 'pt' ? (
                  <S.LanguageSelector>
                    <IconBrazil />
                    <h4>{lang.state.toUpperCase()}</h4>
                    <IconTriangle />

                    {languageIsVisible && <LanguageMenu />}
                  </S.LanguageSelector>
                ) : lang.state === 'en' ? (
                  <S.LanguageSelector>
                    <IconUSA />
                    <h4>{lang.state.toUpperCase()}</h4>
                    <IconTriangle />

                    {languageIsVisible && <LanguageMenu />}
                  </S.LanguageSelector>
                ) : (
                  <S.LanguageSelector>
                    <IconSpain />
                    <h4>{lang.state.toUpperCase()}</h4>
                    <IconTriangle />

                    {languageIsVisible && <LanguageMenu />}
                  </S.LanguageSelector>
                )}
              </S.CurrentLanguage>
              <hr style={{ height: '20px', alignSelf: 'center' }} />

              <S.CloseMenuIcon
                onClick={() => {
                  setIsVisible(!isVisible);
                  languageIsVisible ? (
                    setLanguageIsVisible(!languageIsVisible)
                  ) : (
                    <></>
                  );
                }}
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

              <h4>{textContent.LoginText[lang.state]}</h4>
            </S.LeftTopContent>
          </S.TopContent>

          <S.MenuContent>
            <S.SolutionsDropdown
              data-testid="solutionsDropdown"
              onClick={() => setSolutionIsVisible(!solutionIsVisible)}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              {textContent.SolutionsText[lang.state]}
              <IconTriangle />
            </S.SolutionsDropdown>
            {solutionIsVisible &&
              textContent.solutionsList.map((element) => (
                <motion.div
                  data-testid="solutionsDiv"
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.7,
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <S.SolutionsWrapper>
                    <S.SolutionsTitle>
                      {element.icon} {element.title[lang.state]}
                    </S.SolutionsTitle>
                    {element.descripton[lang.state]}
                  </S.SolutionsWrapper>
                </motion.div>
              ))}

            {NavItemsList.map((element) => (
              <S.MenuOption
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                {element.content[lang.state]}
              </S.MenuOption>
            ))}
            <S.Button> {textContent.BtnText[lang.state]}</S.Button>
          </S.MenuContent>
        </S.Nav>
      )}
    </AnimatePresence>
  );
}
