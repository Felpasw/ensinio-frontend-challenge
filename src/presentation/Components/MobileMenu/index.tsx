import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import * as S from './styles';
import IconMenu from '../../../assets/IconMenu';
import IconClose from '../../../assets/IconClose';
import EnsionioLogo from '../../../assets/EnsinioLogo';

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
          <S.Navlist>
            <S.NavItems
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={
                {
                  // delay: element.Delay,
                }
              }
              exit={{
                scale: 0,
                opacity: 0,
              }}
            >
              <S.CloseMenuIcon
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{
                  scale: 1.5,
                }}
              >
                <IconClose />
              </S.CloseMenuIcon>
              Bom dia
            </S.NavItems>
          </S.Navlist>
        </S.Nav>
      )}
    </AnimatePresence>
  );
}
