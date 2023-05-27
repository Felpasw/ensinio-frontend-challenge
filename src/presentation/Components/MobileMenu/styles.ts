import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navlist = styled(motion.ul)`
  @media (max-width: 999px) {
    display: flex;
    list-style: none;
    position: absolute;
    top: 10.5vh;
    right: 0px;
    width: auto;
    height: 92vh;
    overflow: hidden;
    background-color: #23232e;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    float: right;
  }
`;

export const NavItems = styled(motion.li)`
  letter-spacing: 3px;
  margin-left: 32px;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  color: #fff;
  @media (max-width: 999px) {
    display: block;
    opacity: 100;
  }
`;
