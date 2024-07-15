import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoImg from '../utils/Images/Logo.png';
const Nav = styled.nav`
  background-color: #333;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const NavLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px; /* Increased margin for better spacing */
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px; /* Larger clickable area */
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700; /* Change color on hover */
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid #ffd700; /* Highlight active link */
  }
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLogo to="/">
        <Logo src={LogoImg} alt="Logo" />
        Health-on-Track
      </NavLogo>

      <NavMenu>
        <NavItem>
          <NavLinkStyled to="/" activeClassName="active" exact>
            Dashboard
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/Profile" activeClassName="active">
            Profile
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/Rewards" activeClassName="active">
            Achievements
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/activity" activeClassName="active">
            Add Activity
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/LeaderBoard" activeClassName="active">
            Leader Board
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/contact" activeClassName="active">
            Contact
          </NavLinkStyled>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
