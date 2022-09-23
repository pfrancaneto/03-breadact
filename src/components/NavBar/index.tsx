import { NavLink } from "react-router-dom";
import { Container, Link } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <Link to="/production">Produção</Link>
      <Link to="/stock">Estoque</Link>
    </Container>
  );
};
