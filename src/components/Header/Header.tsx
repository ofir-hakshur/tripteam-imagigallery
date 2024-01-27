import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <LogoWrapper>
        <Image src="src/assets/galleryIcon.png" />
        <Title>ImagiGallery</Title>
      </LogoWrapper>
      <NavbarWrapper>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about-us">About us</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </NavbarWrapper>
      <HamburgerContainer>
        <img
          src="src/assets/Hamburger_icon.png"
          width={30}
          height={30}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <DropdownContainer onClick={() => setIsOpen(false)}>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about-us">About us</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </DropdownContainer>
        )}
      </HamburgerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 5px 40px;
  background-color: #feb761;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

const Image = styled.img.attrs({ width: 100, height: 100 })``;

const Title = styled.span`
  color: #f94904;
  font-weight: 700;
  font-size: 40px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavbarLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-size: 20px;
  color: black;
  &.active {
    font-weight: bold;
  }
  &:hover {
    color: #f94904;
  }
`;

const HamburgerContainer = styled.div`
  position: relative;
  display: none;
  @media (max-width: 480px) {
    display: flex;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 25px 0 #00000040;
  padding: 6px 6px;
  gap: 6px;
  top: 30px;
  right: 0;
  background-color: white;
  width: 150px;
  border-radius: 4px;
`;
