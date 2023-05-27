import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import EnsionioLogo from '../../../assets/EnsinioLogo';
import UserProfileLogo from '../../../assets/UserProfileLogo';
import IconTriangle from '../../../assets/IconTriagle';
import IconGamification from '../../../assets/IconGamification';
import IconEad from '../../../assets/IconEad';
import IconSocial from '../../../assets/IconSocial';
import IconApp from '../../../assets/IconApp';

import * as textContent from '../../../textContent';

import * as S from './styles';

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

export default function Navbar() {
  const [solutionsIsVisible, setSolutionsIsVisible] = useState(false);
  const [laguagesIsVisable, setLanguagesIsVisable] = useState(false);

  return (
    <AnimatePresence>
      <S.Nav>
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
              <div>Soluções</div>
              <div style={{ marginLeft: '7%' }}>
                <IconTriangle />
              </div>
            </div>
          </S.NavItem>

          {solutionsIsVisible && (
            <S.DropdownMenu>
              <S.SolutionsContainer>
                <S.Title>Soluções Principais </S.Title>
                <S.Solutions>
                  {solutionsList.map((element) => (
                    <S.SolutionsItem>
                      <S.SolutionsTitle>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                          }}
                        >
                          <div style={{ alignSelf: 'center' }}>
                            {element.icon}
                          </div>
                          <div style={{ alignSelf: 'center' }}>
                            {element.title}
                          </div>
                        </div>
                      </S.SolutionsTitle>
                      {element.descripton}
                    </S.SolutionsItem>
                  ))}
                </S.Solutions>
              </S.SolutionsContainer>
            </S.DropdownMenu>
          )}

          {textContent.NavItemsList.map((element) => (
            <S.NavItems>
              <S.NavItem> {element.content} </S.NavItem>
            </S.NavItems>
          ))}

          <hr style={{ height: '24px', alignSelf: 'center', margin: '2%' }} />

          <S.NavItem>
            <S.EnterContent>
              <S.EnterItem>
                <UserProfileLogo />
              </S.EnterItem>
              <S.EnterItem>Entrar</S.EnterItem>
            </S.EnterContent>
          </S.NavItem>

          <S.Buttton>Começar agora</S.Buttton>
          <S.NavItem onClick={() => setLanguagesIsVisable(!laguagesIsVisable)}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'center',
              }}
            >
              <div> PT </div>
              <div style={{ marginLeft: '7%' }}>
                <IconTriangle />
              </div>
            </div>
          </S.NavItem>
          {laguagesIsVisable && (
            <S.LaguagesContainer>
              <S.LanguagesItem></S.LanguagesItem>
            </S.LaguagesContainer>
          )}
        </S.Navlist>
      </S.Nav>
    </AnimatePresence>
  );
}
