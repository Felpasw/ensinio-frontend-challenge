import AudioPlayIcon from '../../../assets/AudioPlayIcon';
import IconCertified from '../../../assets/IconBrazil';
import IconPlaylist from '../../../assets/IconPlaylist';
import MediaLogo from '../../../assets/IconMediaLogo';

import * as textContent from '../../../textContent';
import * as S from './styles';

import PersonImg from '../../../assets/image.png';
import { LangContextType } from '../../../@types/lang';
import { LanguageContext } from '../../../context/Lang';
import { useContext } from 'react';

const logoList = [<IconPlaylist />, <IconCertified />, <IconPlaylist />];

export default function HeroSection() {
  const lang: LangContextType = useContext(LanguageContext);

  return (
    <S.MainContent data-testid="HeroSection">
      <S.Logos>{logoList.map((element) => element)}</S.Logos>

      <S.MainContentElements>
        <S.TextContent>
          <S.TopTitleContent>
            <div>
              <MediaLogo />
            </div>
            {textContent.TopTiTleText[lang.state]}
          </S.TopTitleContent>

          <S.Title>{textContent.TitleText[lang.state]}</S.Title>

          <S.Subtitle>{textContent.SubtitleText[lang.state]}</S.Subtitle>

          <S.Buttons>
            <S.Button> {textContent.BtnText[lang.state]}</S.Button>
            <S.SeeVideoContent>
              <div style={{ alignSelf: 'center' }}>
                <AudioPlayIcon />
              </div>

              <S.SeeVideoContentText>
                {textContent.SeeVideoText[lang.state]}
              </S.SeeVideoContentText>
            </S.SeeVideoContent>
          </S.Buttons>
        </S.TextContent>

        <S.Img src={PersonImg} />
      </S.MainContentElements>
    </S.MainContent>
  );
}
