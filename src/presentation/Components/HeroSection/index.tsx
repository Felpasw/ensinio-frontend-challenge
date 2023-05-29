import AudioPlayIcon from '../../../assets/AudioPlayIcon';
import IconCertified from '../../../assets/IconCertified';
import IconPlaylist from '../../../assets/IconPlaylist';
import MediaLogo from '../../../assets/IconMediaLogo';

import * as textContent from '../../../textContent';
import * as S from './styles';

import PersonImg from '../../../assets/PersonImg/index.png';
import CirgleSVG from '../../../assets/CircleSVG';
import UnionSVGTop from '../../../assets/UnionSVGTop';
import UnionSVGBottom from '../../../assets/UnionSVGBottom';

const logoList = [<IconPlaylist />, <IconCertified />, <IconPlaylist />];

export default function HeroSection() {
  return (
    <S.MainContent>
      <S.Logos>{logoList.map((element) => element)}</S.Logos>

      <S.MainContentElements>
        <S.TextContent>
          <S.TopTitleContent>
            <MediaLogo /> {textContent.TopTiTleText}
          </S.TopTitleContent>

          <S.Title>{textContent.TitleText}</S.Title>

          <S.Subtitle>{textContent.SubtitleText}</S.Subtitle>

          <S.Buttons>
            <S.Button> Começar agora</S.Button>
            <S.SeeVideoContent>
              <div style={{ alignSelf: 'center' }}>
                <AudioPlayIcon />
              </div>
              <S.SeeVideoContentText>Ver vídeo</S.SeeVideoContentText>
            </S.SeeVideoContent>
          </S.Buttons>
        </S.TextContent>

        <S.CircleSVG>
          <CirgleSVG />
        </S.CircleSVG>

        <S.UnionSVGTop>
          <UnionSVGTop />
        </S.UnionSVGTop>

        <S.UnionSVGBottom>
          <UnionSVGBottom />
        </S.UnionSVGBottom>

        <S.Img src={PersonImg} />
      </S.MainContentElements>
    </S.MainContent>
  );
}
