import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import * as S from './styles';
import IconMenu from '../../../assets/IconMenu';
import IconClose from '../../../assets/IconClose';
import EnsionioLogo from '../../../assets/EnsinioLogo';
import IconTriangle from '../../../assets/IconTriagle';
import IconBrazil from '../../../assets/IconBrazil';
import UserProfileLogo from '../../../assets/UserProfileLogo';
import { NavItemsList } from '../../../textContent';

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);

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
              <S.CurrentLanguage>
                <IconBrazil />
                <h4>PT </h4>
                <IconTriangle />
              </S.CurrentLanguage>

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
            {NavItemsList.map((element) => (
              <S.MenuOption>
                <hr style={{ borderColor: '#41b5d9', width: '100%' }} />
                {element.content}
              </S.MenuOption>
            ))}
            <S.SolutionsDropdown>
              <hr style={{ borderColor: '#41b5d9', width: '100%' }} />
              Soluções <IconTriangle />
            </S.SolutionsDropdown>
          </S.MenuContent>
          <S.Button> Começar agora</S.Button>
        </S.Nav>
      )}
    </AnimatePresence>
  );
}
