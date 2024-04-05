import React from 'react';
import styled from 'styled-components';
const FooterContainer = styled.footer`
  background-color: #282c34;
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  margin-top: auto; // Flex container içinde footer'ı altta tutmak için
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2024 Kod Editörü Uygulaması. Tüm hakları saklıdır.
      </FooterText>
      <FooterText>
        Daha fazla bilgi için <FooterLink href="https://example.com">burayı ziyaret edin</FooterLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
