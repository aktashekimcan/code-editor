import React from 'react';
import styled from 'styled-components';
const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      Kod Editörü Uygulaması
      <Navigation>
        <NavLink href="#">Ana Sayfa</NavLink>
        <NavLink href="#">Hakkında</NavLink>
        <NavLink href="#">İletişim</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
