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
                {lang.state === 'pt' ? (
                  <>
                    <IconBrazil />
                    <h4>{lang.state.toUpperCase()}</h4>
                    <IconTriangle />
                    {languageIsVisible && <LanguageMenu />}
                  </>
                ) : lang.state === 'en' ? (
                  <>
                    <IconUSA />
                    <h4>{lang.state.toUpperCase()}</h4>
                    <IconTriangle />
                    {languageIsVisible && <LanguageMenu />}
                  </>
                ) : (
                  <>
                    <IconSpain />
                    <h4>{lang.state.toUpperCase()}</h4>
                    <IconTriangle />
                    {languageIsVisible && <LanguageMenu />}
                  </>
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
              <hr style={{ borderColor: '#41b5d9', width: '100%' }} />
              {textContent.SolutionsText[lang.state]}
              <IconTriangle />
            </S.SolutionsDropdown>
            {solutionIsVisible &&
              textContent.solutionsList.map((element) => (
                <motion.div
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
                  <S.SolutionsTitle>
                    {element.icon} {element.title[lang.state]}
                  </S.SolutionsTitle>
                  {element.descripton[lang.state]}
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
                <hr style={{ borderColor: '#41b5d9', width: '100%' }} />
                {element.content[lang.state]}
              </S.MenuOption>
            ))}
          </S.MenuContent>
          <S.Button> {textContent.BtnText[lang.state]}</S.Button>
        </S.Nav>
      )}
    </AnimatePresence>
  );
}
