import * as textContent from '../../../textContent';
import IconTrilhas from '../../../assets/IconTrilhas';
import IconPlaylists from '../../../assets/IconPlaylists';
import IconFolder from '../../../assets/IconFolder';
import * as S from './styles';
import { useEffect } from 'react';

export default function BottomInitialPageContent() {
  useEffect(() => {});

  return (
    <S.BottomContent>
      <S.BottomTopTitles>
        <S.BottomTopTitle> Pensamos em cada detalhe</S.BottomTopTitle>
        <S.BottomTopTitle2> {textContent.BottomSubtitleText}</S.BottomTopTitle2>
      </S.BottomTopTitles>

      <S.BottomContentTitle>{textContent.BottomTitleText}</S.BottomContentTitle>

      <S.Cards>
        {/* {BottomCards.items.map((element) => (
          <>
            {element.id === 1 ? (
              <S.Card>
                <IconTrilhas />
                <S.CardTitle>{element.title.pt}</S.CardTitle>
                <S.CardSubtitle>{element.description.pt}</S.CardSubtitle>
              </S.Card>
            ) : (
              <></>
            )}
            {element.id === 2 ? (
              <S.Card>
                <IconPlaylists />
                <S.CardTitle>{element.title.pt}</S.CardTitle>
                <S.CardSubtitle>{element.description.pt}</S.CardSubtitle>
              </S.Card>
            ) : (
              <></>
            )}
            {element.id === 3 ? (
              <S.Card>
                <IconFolder />
                <S.CardTitle>{element.title.pt}</S.CardTitle>
                <S.CardSubtitle>{element.description.pt}</S.CardSubtitle>
              </S.Card>
            ) : (
              <></>
            )}
          </>
        ))} */}
      </S.Cards>
    </S.BottomContent>
  );
}
