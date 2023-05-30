import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
  z-index: -1;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 100px;
  width: 60.43vh;
  height: 60.97vh;
  max-width: 100%;
`;

export const CircleSVG = styled.div`
  position: absolute;
  right: 500px;
  bottom: 0;
  right: 0;
  max-width: 100%;
  overflow: hidden;
  @media (max-width: 1100px) {
  }
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  justify-content: space-around;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  max-width: 100%;
  @media (max-width: 999px) {
    margin-left: 10%;
    align-items: center;
  }
`;

export const TopTitleContent = styled.div`
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: 600;
  line-height: 105%;
  width: 35vh;
  height: 2.26vh;
  font-size: 2vh;
  color: #ffff;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 5.85vh;
  color: #ffffff;
  width: 66.44vh;
  height: 12.78vh;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin-top: 44px;
  max-width: 100%;
`;

export const Subtitle = styled.h2`
  margin-top: 44px;
  font-weight: 400;
  font-size: 2.13vh;
  max-width: 100%;
  color: #ffff;
  line-height: 150%;
  width: 55.39vh;
  height: 9.58vh;
`;

export const Button = styled.button`
  border-radius: 100px;
  font-size: 2vh;
  height: 7.45vh;
  margin-right: 44px;
  width: 24.5vh;
  cursor: pointer;
  max-width: 100%;
  background: #00e1e7;
  border: 2px solid #00e1e7;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    background: transparent;
    border: #00e1e7 2px solid;
    color: #00e1e7;
  }
`;

export const Buttons = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
`;

export const SeeVideoContent = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const SeeVideoContentText = styled.h2`
  font-size: 2.13vh;
  line-height: 125%;
  color: #ffff;
  margin-left: 8px;
  align-self: center;
`;

export const UnionSVGTop = styled.div`
  position: absolute;
  left: 300px;
  top: 60px;
  right: 0;
`;

export const UnionSVGBottom = styled.div`
  position: relative;
  left: 60px;
  right: 0;
  top: 200px;
`;

export const MainContentElements = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: start;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 190px;
  width: 60.43vh;
  height: 60.97vh;
  max-width: 100%;
  @media (max-width: 1100px) {
    position: relative;
    left: -90px;
  }
`;
