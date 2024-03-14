import { FC } from "react";
import { Container } from "react-bootstrap";

const Header: FC = () => {
  return (
    <header>
      <Container className="d-flex justify-content-center">
        <h1>Contatinhos</h1>
      </Container>
    </header>
  );
};

export default Header;
