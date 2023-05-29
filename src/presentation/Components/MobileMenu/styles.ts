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
    z-index: 1;
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
  width: 40px;

  padding: 2%;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 60px;
  width: 100%;
`;

export const RightTopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: end;
  width: 300px;
`;

export const CurrentLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 4%;
  width: 60px;
  color: #ffff;
  align-items: center;
`;

export const LeftTopContent = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  margin-left: 7%;
  align-self: center;
  font-size: 20px;
`;

export const UserProfileLogo = styled.div`
  align-self: center;
`;

export const MenuContent = styled.div`
  display: flex;
  margin: 5%;
  color: #ffff;
  height: 400px;
  flex-direction: column;
`;

export const MenuOption = styled.div`
  font-size: 4.19vh;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

export const SolutionsDropdown = styled.div`
  font-size: 4.19vh;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

export const Button = styled.button`
  border-radius: 100px;
  font-size: 3vh;
  height: 7.45vh;
  width: 50vh;
  cursor: pointer;
  max-width: 100%;
  background: #00e1e7;
  border: 2px solid #00e1e7;
  outline: none;
  align-self: center;
`;
