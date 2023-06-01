import styled from 'styled-components';

export const SeeMoreText = styled.h2`
  color: #5f41d9;

  font-size: 2.13vh;
  line-height: 125%;

  margin-right: 5px;

  padding: 2%;
  width: 100%;

  cursor: pointer;
`;

export const SeeMoreContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;

  margin-right: 10%;
  margin-top: 3%;
  @media (max-width: 1100px) {
    margin-top: 13%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 5%;
  width: 90%;

  max-width: 100%;
  overflow: hidden;

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.h2`
  color: #423d51;

  font-weight: 500;
  font-size: 2.13vh;
  line-height: 150%;

  margin: 2%;
  height: 3.19vh;
  width: 57.12vh;
`;

export const FooterTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;

  max-width: 100%;
`;
