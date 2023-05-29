import IconArrow from '../../../assets/IconArrow';
import IconRocket from '../../../assets/IconRocket';

import * as S from './styles';

import * as textContent from '../../../textContent';

export default function Footer() {
  return (
    <S.Footer>
      <hr style={{ margin: '5%' }} />
      <S.FooterTitleContent>
        <IconRocket />
        <S.FooterText> {textContent.FooterText} </S.FooterText>
      </S.FooterTitleContent>

      <S.SeeMoreContent>
        <S.SeeMoreText>Ver mais</S.SeeMoreText>
        <IconArrow />
      </S.SeeMoreContent>
    </S.Footer>
  );
}
