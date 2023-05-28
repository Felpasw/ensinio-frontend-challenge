import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navlist = styled(motion.ul)`
  color: #fff;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(15px);
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 1;

  background: transparent;
  width: 100%;
`;

export const NavItems = styled(motion.li)`
  letter-spacing: 3px;
  margin-left: 32px;
`;

export const MenuIcon = styled(motion.div)`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    position: fixed;
    height: 88px;
    color: #fff;
    justify-content: flex-end;
    cursor: pointer;
    width: 40px;
  }
`;
