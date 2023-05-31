import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);

  position: fixed;

  height: 10.65vh;
  width: 100%;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  max-width: 100%;

  color: #ffff;

  font-size: 2vh;
  line-height: 105%;

  height: 5.32vh;
  width: 30vh;

  cursor: pointer;

  background: transparent;

  border: 1px solid #ffff;

  outline: none;

  transition: 0.15s ease-in-out;

  &:hover {
    background: #ffff;

    border: #ffff;

    color: black;
  }
`;

export const SolutionsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  width: 100%;
`;

export const EnterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;

  cursor: pointer;
  margin-left: 5%;
  margin-right: 5%;

  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const NavItem = styled.a`
  letter-spacing: 3px;
  color: #fff;

  align-self: center;

  text-decoration: none;

  font-weight: 500;
  font-size: 2vh;

  transition: 0.3s;

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
  font-style: normal;

  color: #ffffff;

  align-self: center;
`;

export const DropdownMenu = styled(motion.div)`
  display: flex;

  z-index: 1;

  position: absolute;
  margin-top: 3.5rem;
  border-radius: 0.375rem;
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
  justify-content: center;

  cursor: pointer;

  width: 100%;
  padding: 4%;
  margin: 3%;
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
  align-self: center;

  color: #5f41d9;

  font-weight: 600;
  font-size: 1.86vh;

  letter-spacing: 0.15em;
  text-transform: uppercase;

  margin-bottom: 4%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-size: 2vh;

  color: #000;

  width: 100%;
  padding: 6px;
`;
export const SolutionsDescription = styled.h2`
  font-size: 1.5vh;
  margin-left: 18%;
`;
