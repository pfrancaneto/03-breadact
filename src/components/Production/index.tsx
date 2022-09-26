import { Outlet, useParams } from "react-router-dom";
import data from "../../assets/data.json";
import {
  ProductContainer,
  ProductImage,
  ProductsContainer,
  Title,
} from "./styles";

export const Production = () => {
  return (
    <div>
      <Title>O que vamos fabricar hoje?</Title>
      <ProductsContainer>
        {data.products.map((product) => (
          <ProductContainer key={product.id} to={`./${product.id}`}>
            <ProductImage src={product.image} />
            <h4>{product.name}</h4>
          </ProductContainer>
        ))}
      </ProductsContainer>

      <Outlet />
    </div>
  );
};
