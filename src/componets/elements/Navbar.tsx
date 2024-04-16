"use client";

import Link from "next/link";
import styled from "styled-components";

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

const Brand = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
