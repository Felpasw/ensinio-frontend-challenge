import { motion } from 'framer-motion';
import { useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';

import * as S from './styles';

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const changeMobileMenuVisibility = (): void => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <>
      <S.Navlist
        initial={{
          maxHeight: 0,
        }}
        animate={{
          maxHeight: '100vh',
        }}
        transition={{
          duration: 0.5,
        }}
        exit={{
          maxHeight: 0,
          transition: { delay: 1.6 },
        }}
        key="modal"
      >
        {/* <NavItems
        NavItems
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          delay: element.Delay
        }}
        key={index}
        exit={{
          scale: 0,
          opacity: 0
        }}
      >
        </NavItems> */}
      </S.Navlist>

      <motion.div whileTap={{ scale: 2 }}>
        <S.MenuIcon
          onClick={() => {
            changeMobileMenuVisibility();
          }}
        >
          {' '}
          <TfiMenu />{' '}
        </S.MenuIcon>
      </motion.div>
    </>
  );
}
