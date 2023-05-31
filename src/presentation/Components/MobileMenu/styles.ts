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
    height: 15vh;
    backdrop-filter: blur(15px);
    z-index: 1;
    background: rgba(90, 74, 217, 0.35);
  }
`;

export const Logo = styled.div`
  color: white;
  cursor: pointer;
  align-self: center;
  margin-left: 80px;
  width: 20vh;
`;

export const Nav = styled.div`
  display: none;
  @media (max-width: 1100px) {
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    position: fixed;
    background: linear-gradient(259.95deg, #5f41d9 2.25%, #41b5d9 100.27%);
    height: 100%;
    width: 100%;
    z-index: 10;
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
  width: 30px;
  margin-right: 40px;
`;

export const CloseMenuIcon = styled(motion.div)`
  cursor: pointer;

  align-self: flex-end;
  width: 60%;

  padding: 2%;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`;

export const RightTopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: end;
  width: 20vh;
`;

export const CurrentLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 4%;
  width: 100%;
  color: #ffff;
  align-items: center;
`;

export const LeftTopContent = styled.div`
  display: flex;
  cursor: pointer;

  flex-direction: row;

  gap: 8px;

  color: #fff;

  margin-left: 7%;

  align-self: center;

  font-size: 3vh;
`;

export const UserProfileLogo = styled.div`
  align-self: center;
`;

export const MenuContent = styled.div`
  display: flex;
  margin: 5%;
  padding: 3%;
  color: #ffff;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuOption = styled(motion.div)`
  font-size: 4.19vh;
  width: 100%;
  cursor: pointer;
  height: 100%;

  border-top: 1px solid rgba(255, 255, 255, 0.25);

  padding: 16px 0;
`;

export const SolutionsDropdown = styled(motion.div)`
  display: flex;
  align-items: center;

  padding: 16px 0;

  font-size: 4.19vh;
  width: 100%;
  cursor: pointer;
  height: 100%;

  gap: 16px;
`;

export const SolutionsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4px;

  margin: 16px 0;
`;

export const SolutionsTitle = styled.div`
  display: flex;
  gap: 8px;

  font-size: 3vh;
`;

export const Button = styled.button`
  border-radius: 100px;
  font-size: 3vh;
  height: 7.45vh;
  margin-top: 60px;
  width: 50vh;
  cursor: pointer;
  max-width: 100%;
  background: #00e1e7;
  border: 2px solid #00e1e7;
  outline: none;
  padding: 2%;
  align-self: center;
  transition: 0.15s ease-in-out;
  &:hover {
    background: transparent;
    border: #00e1e7 2px solid;
    color: #00e1e7;
  }
`;

export const DivLanguageMenu = styled.div`
  position: relative;
  gap: 8px;
  padding: 5%;
  padding-top: 40px;
  bottom: 111;
  left: 15;
`;

export const LanguageSelector = styled.button`
  position: relative;

  cursor: pointer;

  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fff;
  background: transparent;

  border: none;
`;
