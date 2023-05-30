import styled from 'styled-components';

export const SeeMoreText = styled.h2`
  color: #5f41d9;
  font-size: 2.13vh;
  margin-right: 5px;
  line-height: 125%;
  padding: 2%;
  cursor: pointer;
`;

export const SeeMoreContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10%;
  align-self: center;
  margin-top: 3%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5%;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  width: 90%;
  overflow: hidden;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.h2`
  color: #423d51;
  font-weight: 500;
  margin: 2%;
  height: 3.19vh;
  width: 57.12vh;
  line-height: 150%;
  font-size: 2.13vh;
`;

export const FooterTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 100%;
`;
