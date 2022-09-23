import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import {
  ProductContainer,
  ProductImage,
  ProductsContainer,
  Title,
} from "./styles";

type ParamsType = {
  selectedProduct: string;
};

export const Production = () => {
  const { selectedProduct } = useParams<ParamsType>();

  const selected = data.products.find(
    (product) => product.id.toString() === selectedProduct
  );

  return (
    <div>
      <Title>O que vamos fabricar hoje?</Title>
      <ProductsContainer>
        {data.products.map((product) => (
          <ProductContainer key={product.id} to={`../${product.id}`}>
            <ProductImage src={product.image} />
            <h4>{product.name}</h4>
          </ProductContainer>
        ))}
      </ProductsContainer>
      <p>{selected?.name}</p>
      <h3>{selected?.recipe}</h3>
    </div>
  );
};
