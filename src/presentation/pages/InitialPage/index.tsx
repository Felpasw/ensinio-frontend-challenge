import Navbar from '../../Components/Navbar'
import styled from 'styled-components';
import PersonImg from '../../../assets/PersonImg/index.png'
import IconPlaylist from '../../../assets/IconPlaylist';
import IconCertified from '../../../assets/IconCertified';
import * as textContent from '../../../text-content';
import MediaLogo from '../../../assets/MediaLogo';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(259.95deg, #5F41D9 2.25%, #41B5D9 100.27%);
`;

const Img = styled.img`
  width: 529px;
  height: 533px;
  left: 744px;
  top: 167px;  
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  justify-content: space-around;
`;

const TextContent = styled.div`
  margin: 5%;
`;

const TopTitle = styled.h1`
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffff
`;


const Title = styled.h1`
  font-weight: 500;
  font-size: 44px;
  color: #FFFFFF;
  font-size: 44px;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

const Button = styled.div`
  
`;

const SeeVideoContent = styled.div`
  
`;


const TopLogoList = [<IconPlaylist />, <IconCertified />, <IconPlaylist />]

export default function InitialPage() {
  return (
    <>
      <Navbar />
      <MainContent>
        <Logos>
          {TopLogoList.map((element) =>
            element
          )}
        </Logos>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextContent>
            <TopTitle>< MediaLogo /> {textContent.TopTiTleText} </TopTitle>
            <Title>{textContent.TitleText}</Title>
            <Subtitle>{textContent.SubtitleText}</Subtitle>
          </TextContent>
          <Img src={PersonImg} />
        </div>
      </MainContent>
    </>

  )
}