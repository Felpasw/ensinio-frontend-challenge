import IconArrow from '../../../assets/IconArrow';
import IconRocket from '../../../assets/IconRocket';

import * as S from './styles';

import * as textContent from '../../../textContent';
import { LangContextType } from '../../../@types/lang';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/Lang';

export default function Footer() {
  const lang: LangContextType = useContext(LanguageContext);

  return (
    <>
      <hr style={{ maxWidth: '100%', margin: '3%', marginRight: 0 }} />
      <S.Footer>
        <S.FooterTitleContent>
          <IconRocket />
          <S.FooterText>{textContent.FooterText[lang.state]}</S.FooterText>
        </S.FooterTitleContent>

        <S.SeeMoreContent>
          <S.SeeMoreText>
            {textContent.FooterRightTextContent[lang.state]}
          </S.SeeMoreText>
          <IconArrow />
        </S.SeeMoreContent>
      </S.Footer>
    </>
  );
}
