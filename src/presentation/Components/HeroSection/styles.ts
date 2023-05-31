import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
  z-index: -1;
`;

export const CircleSVG = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 100%;
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
  max-width: 100%;
  @media (max-width: 999px) {
    align-items: center;
  }
`;

export const TopTitleContent = styled.div`
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  line-height: 105%;
  width: 35vh;
  height: 2.26vh;
  font-size: 2vh;
  color: #ffff;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 5.85vh;
  margin-bottom: 12px;
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
  @media (max-width: 1100px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 100px;
  font-size: 2vh;
  height: 7.45vh;
  margin-right: 44px;
  width: 30vh;
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
  max-width: fit-content;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SeeVideoContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 20vh;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1100px) {
    margin-left: 13%;
  }
`;

export const SeeVideoContentText = styled.h2`
  font-size: 2.13vh;
  line-height: 125%;
  width: 100%;
  color: #ffff;
  align-self: center;
`;

export const MainContentElements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  bottom: 0;
  right: 80px;
`;

export const HeroContent = styled.div`
  position: absolute;
`;

export const UnionSVGBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const UnionSVGTop = styled.div`
  position: absolute;
  top: 30px;
  right: 24px;
`;

export const Img = styled.img`
  aspect-ratio: 685 / 554;
  bottom: 0;
  max-width: 100%;
  height: 100%;
  margin-top: 5%;
`;

export const MobileContent = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: relative;
    height: 100%;
    margin-top: 500px;
  }
`;
