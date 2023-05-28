import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Content = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    position: fixed;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    backdrop-filter: blur(15px);
  }
`;

export const Logo = styled.div`
  color: white;
  cursor: pointer;
  align-self: center;
  margin-left: 80px;
`;

export const Nav = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: flex-end;
    position: fixed;

    backdrop-filter: blur(15px);
    background: transparent;
    height: 100%;
    width: 100%;
  }
`;

export const Navlist = styled(motion.ul)`
  color: #fff;
  height: 100%;
`;

export const NavItems = styled(motion.li)`
  letter-spacing: 3px;
  margin-left: 32px;
`;

export const MenuIcon = styled(motion.div)`
  display: none;
  display: flex;
  color: white;
  cursor: pointer;

  width: 50px;
`;

export const CloseMenuIcon = styled(motion.div)`
  cursor: pointer;
  align-self: flex-end;
  width: 100px;
`;
