import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);

  z-index: -1;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin: 2%;
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
  line-height: 105%;
  font-size: 2vh;
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 35vh;
  height: 2.26vh;

  color: #ffff;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 5.85vh;
  line-height: 110%;
  letter-spacing: -0.03em;

  margin-bottom: 12px;
  height: 12.78vh;
  width: 66.44vh;
  margin-top: 44px;
  max-width: 100%;

  color: #ffffff;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 2.13vh;
  line-height: 150%;

  margin-top: 44px;
  max-width: 100%;

  color: #ffff;

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
  max-width: 100%;

  cursor: pointer;

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
  display: flex;
  flex-direction: row;
  gap: 8px;

  margin-top: 48px;

  max-width: fit-content;
  justify-content: center;

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
  align-self: center;
  font-size: 2.13vh;
  line-height: 125%;
  width: 100%;
  color: #ffff;
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

export const Img = styled.img`
  aspect-ratio: 685 / 554;

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
