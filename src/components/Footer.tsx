import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import IconButton from "./Button/IconButton";

const FooterArea = () => {
  return (
    <BottomContainer>
      <FooterInner>
        <CompanyName>react shop</CompanyName>
        <CompanyInfo>
          <InfoTitle>company information</InfoTitle>
          <InfoItem>
            Company Name : ReactShop Inc. &nbsp;&nbsp; CEO: Hong Gil-dong
            &nbsp;&nbsp;
          </InfoItem>
          <InfoItem>
            Address : 5F, Sample Building, 100 Teheran-ro, Gangnam-gu, Seoul
          </InfoItem>
          <InfoItem>Email : reactshop.help@example.com</InfoItem>
        </CompanyInfo>
        <IconWrapper>
          <IconLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton iconName={faFacebook} />
          </IconLink>
          <IconLink
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton iconName={faInstagram} />
          </IconLink>
          <IconLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton iconName={faGithub} />
          </IconLink>
        </IconWrapper>
        <Copyright> © 2025 reactShop - All Rights Reserved</Copyright>
      </FooterInner>
    </BottomContainer>
  );
};

const BottomContainer = styled.footer`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  padding: 0 5px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background-color: ${(props) => props.theme.line};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const FooterInner = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;

const CompanyName = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 5px;
  margin-bottom: 10px;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
`;
const CompanyInfo = styled.div``;

const InfoItem = styled.span`
  display: block;
  margin: 5px 0;
  font-size: 14px;
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 20px; /* 아이콘 사이 간격 */
`;

const IconLink = styled.a`
  color: #555;
  font-size: 20px;
  transition: color 0.2s;
  &:hover {
    color: ${(props) => props.theme.hover};
  }
`;
const Copyright = styled.p``;

export default FooterArea;
