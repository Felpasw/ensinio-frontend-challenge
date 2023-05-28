import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import * as S from './styles';
import IconMenu from '../../../assets/IconMenu';

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimatePresence>
      <S.Nav>
        <S.MenuIcon
          whileTap={{
            scale: 2,
          }}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <IconMenu />
        </S.MenuIcon>

        {isVisible && (
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
              Bom dia
            </S.NavItems>
          </S.Navlist>
        )}
      </S.Nav>
    </AnimatePresence>
  );
}
