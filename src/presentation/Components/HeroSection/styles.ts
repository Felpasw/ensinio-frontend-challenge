import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
`;

export const Img = styled.img`
  width: 70.43vh;
  height: 70.97vh;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  justify-content: space-around;
`;

export const TextContent = styled.div`
  margin: 5%;
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
  margin-left: 16px;
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
`;

export const Subtitle = styled.h2`
  margin-top: 44px;
  font-weight: 400;
  font-size: 2.13vh;
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
  /* &:hover {
    background: transparent;
    border:#00E1E7 2px solid; 
    color: black;
} */
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

export const MainContentElements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 999px) {
    flex-direction: column;
    margin: 0;
  }
`;
