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
  @media (max-width: 999px) {
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
  font-size: 15px;
  color: #ffffff;
  font-style: normal;
  align-self: center;
`;

export const DropdownMenu = styled.div`
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: max-content;
`;

export const SolutionsItem = styled.div``;

export const SolutionsTitle = styled.h2`
  color: #130c25;
  font-size: 2vh;
  margin: 6%;
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
  padding: 2.3rem 2.5rem;
`;

export const LaguagesContainer = styled.div`
  z-index: 1;
  top: 2.1rem;
  position: relative;
  margin-right: 3rem;
  margin-top: 3rem;
  border-radius: 0.375rem;
  display: block;
`;

export const LanguagesItem = styled.div`
  border: none;
  height: 3rem;
  display: flex;
  width: 8.625rem;
  cursor: pointer;
  background: rgb(255, 255, 255);
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;
