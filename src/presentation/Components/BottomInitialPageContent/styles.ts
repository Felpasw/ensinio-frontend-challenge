import styled from 'styled-components';

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomTopTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 107px;
  @media (max-width: 999px) {
    margin-top: 60px;
  }
`;

export const BottomContentTitle = styled.h1`
  font-size: 4.26vh;
  color: #130c25;
  margin: 5%;
`;

export const BottomTopTitle = styled.h2`
  color: #432e98;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.13vh;
  margin: 5%;
  line-height: 105%;
`;

export const BottomTopTitle2 = styled.h2`
  font-size: 2.13vh;
  line-height: 150%;
  width: 40.87vh;
  height: 3.19vh;
  margin: 5%;
  color: #423d51;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  margin: 5%;
`;

export const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 2.66vh;
  margin-top: 30.66px;
  line-height: 125%;
  color: #130c25;
`;

export const CardSubtitle = styled.h3`
  font-weight: 400;
  font-size: 2.13vh;
  line-height: 150%;
  color: #423d51;
`;
