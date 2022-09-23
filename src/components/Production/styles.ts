import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  text-align: center;
`;

export const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const ProductContainer = styled(Link)`
  padding-top: 30px;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 5px;
  cursor: pointer;
`;