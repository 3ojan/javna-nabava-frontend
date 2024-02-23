import {
  StyledFooterBgImg,
  StyledFooterBgImgContainerDiv,
  StyledFooterContainerDiv,
  StyledFooterDiv,
  StyledFooterLogoImg,
  StyledVersionParagraph,
} from './styled';

export default function TransparencyFooter() {
  return (
    <>
      <StyledFooterContainerDiv>
        <StyledFooterDiv>
          <p>Plavi link d.o.o., za usluge informacijskog društva</p>
          <StyledFooterLogoImg
            src={`${import.meta.env.VITE_API_IMG_URL}/logoVector.svg`}
          />
          <StyledVersionParagraph>v1.1</StyledVersionParagraph>
        </StyledFooterDiv>
      </StyledFooterContainerDiv>
      <StyledFooterBgImgContainerDiv>
        <StyledFooterBgImg
          src={`${import.meta.env.VITE_API_IMG_URL}/footerSvg.svg`}
          alt="footer image"
        />
      </StyledFooterBgImgContainerDiv>
    </>
  );
}
