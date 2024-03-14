import React, { FC, ChangeEvent, useState } from "react";
import { Action, Contact } from "src/types";
import { Button, Form } from "react-bootstrap";

interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: Contact | undefined;
  toggleModal: () => void;
}

const ContactForm: FC<ContactFormProps> = ({
  dispatch,
  dataToEdit,
  toggleModal,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [contact, setContact] = useState({
    firstName: dataToEdit?.firstName ? dataToEdit.firstName : "",
    phoneNumber: dataToEdit?.phoneNumber ? dataToEdit.phoneNumber : "",
    address: dataToEdit?.address ? dataToEdit.address : "",
    email: dataToEdit?.email ? dataToEdit.email : "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, phoneNumber, address, email } = contact;
    if (
      firstName.trim() === "" ||
      phoneNumber.trim() === "" ||
      address.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMessage("Todos os campos devem ser preenchidos.");
      return;
    } else if (phoneNumber.length < 3) {
      setErrorMessage("Por favor digite um telefone com mais de 3 digitos.");
      return;
    }
    if (!dataToEdit) {
      dispatch({
        type: "ADD_CONTACT",
        payload: {
          id: Date.now(),
          ...contact,
        },
      });
      setContact({
        firstName: "",
        phoneNumber: "",
        address: "",
        email: "",
      });
      setErrorMessage("");
    } else {
      dispatch({
        type: "UPDATE_CONTACT",
        payload: {
          id: dataToEdit.id,
          updates: {
            id: Date.now(),
            ...contact,
          },
        },
      });
      toggleModal();
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <h3 className="mb-3">Adicionar Novo Contato</h3>
      {errorMessage && <p className="errorMsg">{errorMessage}</p>}
      <Form.Group controlId="firstName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          name="firstName"
          value={contact.firstName}
          type="text"
          placeholder="Digite o Nome do Contato"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          name="phoneNumber"
          value={contact.phoneNumber}
          type="text"
          placeholder="Digite o Numero de Telefone"
          onChange={handleOnChange}
        />
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={contact.email}
            type="email"
            placeholder="Digite o email"
            onChange={handleOnChange}
          />
        </Form.Group>
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          name="address"
          value={contact.address}
          type="text"
          placeholder="Digite o Endereço"
          onChange={handleOnChange}
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className="submit-btn">
          {dataToEdit ? "Atualizar Contato" : "Adicionar Contato"}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
