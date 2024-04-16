/* eslint-disable react/no-unescaped-entities */
"use client";

import styled from "styled-components";
import Link from "next/link"; // Use Next.js Link for navigation
import SearchBar from "./Search";

const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  max-width: 1380px;
  padding: 1rem 2rem 2rem;
  @media (min-width: 640px) {
    padding: 1rem 3rem 2rem;
  }
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const Brand = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <Brand> Pokemon App</Brand>
      </Link>
    </Nav>
  );
};

export default Navbar;
