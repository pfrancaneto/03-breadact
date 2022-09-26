import { useParams } from "react-router-dom";
import data from "../../assets/data.json";

type ParamsType = {
  selectedProduct: string;
};

export const Recipe = () => {
  const { selectedProduct } = useParams<ParamsType>();

  const selected = data.products.find(
    (product) => product.id.toString() === selectedProduct
  );

  return (
    <div>
      <p>{selected?.name}</p>
      <h3>{selected?.recipe}</h3>
    </div>
  );
};
