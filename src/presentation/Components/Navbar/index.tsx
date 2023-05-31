import { useState, useContext } from 'react';

import EnsionioLogo from '../../../assets/EnsinioLogo';
import UserProfileLogo from '../../../assets/UserProfileLogo';
import IconTriangle from '../../../assets/IconTriagle';

import * as textContent from '../../../textContent';

import * as S from './styles';

import { LangContextType } from '../../../@types/lang';
import { LanguageContext } from '../../../context/Lang';
import LanguageMenu from '../LanguageMenu';

export default function Navbar() {
  const [solutionsIsVisible, setSolutionsIsVisible] = useState(false);
  const [laguagesIsVisable, setLanguagesIsVisable] = useState(false);
  const lang: LangContextType = useContext(LanguageContext);

  return (
    <S.Nav data-testid="Navbar">
      <a href="/">
        <EnsionioLogo />
      </a>
      <S.Navlist>
        <S.NavItem onClick={() => setSolutionsIsVisible(!solutionsIsVisible)}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            <div>{textContent.SolutionsText[lang.state]}</div>
            <div style={{ marginLeft: '7%' }}>
              <IconTriangle />
            </div>
          </div>
        </S.NavItem>

        {solutionsIsVisible && (
          <S.DropdownMenu
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
            <S.SolutionsContainer>
              <S.Title>{textContent.SolutionsTitle[lang.state]}</S.Title>
              <S.Solutions>
                {textContent.solutionsList.map((element) => (
                  <S.SolutionsItem
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
                    whileHover={{
                      scale: 1.1,
                      opacity: 0.75,
                    }}
                  >
                    <S.SolutionsTitle>
                      <S.SolutionsTitleContainer>
                        <div style={{ alignSelf: 'center' }}>
                          {element.icon}
                        </div>
                        <div style={{ alignSelf: 'center', width: '100%' }}>
                          {element.title[lang.state]}
                        </div>
                      </S.SolutionsTitleContainer>
                    </S.SolutionsTitle>
                    <S.SolutionsDescription>
                      {element.descripton[lang.state]}
                    </S.SolutionsDescription>
                  </S.SolutionsItem>
                ))}
              </S.Solutions>
            </S.SolutionsContainer>
          </S.DropdownMenu>
        )}

        {textContent.NavItemsList.map((element) => (
          <S.NavItems>
            <S.NavItem> {element.content[lang.state]} </S.NavItem>
          </S.NavItems>
        ))}

        <hr style={{ height: '24px', alignSelf: 'center', margin: '2%' }} />

        <S.NavItem>
          <S.EnterContent>
            <S.EnterItem>
              <UserProfileLogo />
            </S.EnterItem>
            <S.EnterItem>{textContent.LoginText[lang.state]}</S.EnterItem>
          </S.EnterContent>
        </S.NavItem>

        <S.Buttton>{textContent.BtnText[lang.state]}</S.Buttton>
        <S.LanguageSelector
          onClick={() => setLanguagesIsVisable(!laguagesIsVisable)}
        >
          <div style={{ fontSize: '2vh' }}> {lang.state.toUpperCase()} </div>
          <IconTriangle />

          {laguagesIsVisable && <LanguageMenu />}
        </S.LanguageSelector>
      </S.Navlist>
    </S.Nav>
  );
}
