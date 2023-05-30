import * as textContent from '../../../textContent';
import IconTrilhas from '../../../assets/IconTrilhas';
import IconPlaylists from '../../../assets/IconPlaylists';
import IconFolder from '../../../assets/IconFolder';
import * as S from './styles';
import { useEffect, useState, useContext } from 'react';

import { Lang, LangContextType, items } from '../../../@types/lang';
import { Axios } from '../../../config/Axios';
import { LanguageContext } from '../../../context/Lang';

export default function BottomInitialPageContent() {
  const [items, setItems] = useState([] as items[]);
  const lang: LangContextType = useContext(LanguageContext);

  const getItems = async () => {
    const Response = await Axios.get('/items').then((response) => {
      setItems(response.data);
    });
    return Response;
  };

  useEffect(() => {
    getItems();
  });

  return (
    <S.BottomContent>
      <S.BottomTopTitles>
        <S.BottomTopTitle>
          {textContent.BottomSubtitleText2[lang.state]}
        </S.BottomTopTitle>
        <S.BottomTopTitle2>
          {textContent.BottomSubtitleText[lang.state]}
        </S.BottomTopTitle2>
      </S.BottomTopTitles>

      <S.BottomContentTitle>
        {textContent.BottomTitleText[lang.state]}
      </S.BottomContentTitle>

      <S.Cards>
        {items.map((element) => (
          <>
            {element.id === 1 ? (
              <S.Card>
                <IconTrilhas />
                <S.CardTitle>{element.title[lang.state]}</S.CardTitle>
                <S.CardSubtitle>
                  {element.description[lang.state]}
                </S.CardSubtitle>
              </S.Card>
            ) : (
              <></>
            )}
            {element.id === 2 ? (
              <S.Card>
                <IconPlaylists />
                <S.CardTitle>{element.title[lang.state]}</S.CardTitle>
                <S.CardSubtitle>
                  {element.description[lang.state]}
                </S.CardSubtitle>
              </S.Card>
            ) : (
              <></>
            )}
            {element.id === 3 ? (
              <S.Card>
                <IconFolder />
                <S.CardTitle>{element.title[lang.state]}</S.CardTitle>
                <S.CardSubtitle>
                  {element.description[lang.state]}
                </S.CardSubtitle>
              </S.Card>
            ) : (
              <></>
            )}
          </>
        ))}
      </S.Cards>
    </S.BottomContent>
  );
}
