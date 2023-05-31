import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);
  height: 10.65vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  position: fixed;
  z-index: 1;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Navlist = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItems = styled.li`
  display: flex;
  margin-left: 32px;
`;

export const Buttton = styled.button`
  border-radius: 100px;
  align-self: center;
  margin-right: 40px;
  margin-left: 40px;
  color: #ffff;
  font-size: 2vh;
  height: 5.32vh;
  width: 30vh;
  cursor: pointer;
  max-width: 100%;
  background: transparent;
  border: 1px solid #ffff;
  outline: none;
  line-height: 105%;
  transition: 0.15s ease-in-out;
  &:hover {
    background: #ffff;
    border: #ffff;
    color: black;
  }
`;

export const EnterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  cursor: pointer;
  align-self: center;
  margin-left: 5%;
  margin-right: 5%;
  transition: 0.3s;
  align-self: center;
  &:hover {
    opacity: 0.7;
  }
`;

export const NavItem = styled.a`
  color: #fff;
  letter-spacing: 3px;
  text-decoration: none;
  align-self: center;
  transition: 0.3s;
  font-weight: 500;
  font-size: 2vh;
  cursor: pointer;
  line-height: 105%;
  &:hover {
    opacity: 0.7;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EnterItem = styled.h4`
  margin-left: 8px;
  font-size: 2vh;
  color: #ffffff;
  font-style: normal;
  align-self: center;
`;

export const DropdownMenu = styled(motion.div)`
  display: flex;
  z-index: 1;
  position: absolute;
  margin-top: 3.5rem;
  border-radius: 0.375rem;
  display: block;
`;

export const Solutions = styled(motion.div)`
  display: grid;
  justify-content: center;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  width: max-content;
`;

export const SolutionsItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  padding: 4%;
`;

export const SolutionsTitle = styled.h2`
  color: #130c25;
  font-size: 2vh;
  width: 100%;
  margin: 2%;
  align-self: center;
  font-weight: 600;
`;

export const Title = styled.h1`
  color: #5f41d9;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 4%;
  font-size: 1.86vh;
  margin-top: 7px;
`;

export const SolutionsContainer = styled.div`
  background-color: #ffff;
  border-radius: 10px;
  padding: 2vh;
  gap: 16px;
  margin-top: 2vh;
`;

export const LanguageSelector = styled.button`
  position: relative;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fff;
  background: transparent;

  border: none;
`;

export const LaguagesContainer = styled.div`
  cursor: pointer;

  width: 13.31vh;

  padding: 1.06px;

  border-radius: 6px;

  position: absolute;
  top: 100%;
  right: 0;
  left: -40px;
  z-index: 1;

  background: #ffff;

  display: block;
`;

export const LanguagesItem = styled.div`
  font-size: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #000;
  width: 100%;
  padding: 6px;
`;
export const SolutionsDescription = styled.h2`
  font-size: 1.5vh;
  margin-left: 18%;
`;
