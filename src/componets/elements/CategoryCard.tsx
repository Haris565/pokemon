import React from "react";
import styled from "styled-components";
import { colors } from "../../../constants";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  bg: string;
  id: string;
};

const CategoryCard = ({ title, bg, id }: CategoryCardProps) => {
  return (
    <CardContainer href={`category/${id}`} bg={bg}>
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default CategoryCard;

const CardContainer = styled(Link)<{ bg?: string }>`
  max-width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${(props) => props.bg || colors[0]};
  color: white;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
  text-transform: capitalize;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;
