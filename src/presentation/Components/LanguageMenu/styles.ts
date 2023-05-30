import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NotVIsible = styled.div`
  opacity: 0;
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

export const LaguagesContainer = styled(motion.div)`
  cursor: pointer;

  width: 13.31vh;

  padding: 1.06px;

  border-radius: 6px;

  position: absolute;
  top: 100%;
  right: 0;
  left: -40px;
  z-index: 2;

  background: #ffff;

  display: block;

  @media (max-width: 1100px) {
    top: 30px;
    left: -9px;
  }
`;

export const LanguagesItem = styled(motion.div)`
  font-size: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #000;
  width: 100%;
  padding: 6px;
`;
