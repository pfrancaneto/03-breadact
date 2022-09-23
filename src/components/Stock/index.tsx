import { useNavigate, useLocation } from "react-router-dom";
import data from "../../assets/data.json";
import { ButtonEye, StockContainer, Title } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Stock = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const showStock = queryParam.get("showStock") === "true";

  function toogleShow() {
    navigate(`?showStock=${!showStock}`, { replace: true });
  }

  return (
    <div>
      <Title>
        Estoque Disponível
        <ButtonEye onClick={toogleShow}>
          {showStock ? (
            <AiFillEyeInvisible size={40} />
          ) : (
            <AiFillEye size={40} />
          )}
        </ButtonEye>
      </Title>
      <StockContainer>
        {data.products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <h1>{showStock ? product.stock : "--"}</h1>
          </div>
        ))}
      </StockContainer>
    </div>
  );
};
