import React, { FC } from "react";
import { Contact, Action } from "src/types.ts";
import ContactItem from "./ContactItem";

interface ContactListProps {
  contacts: Contact[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

// Define the ContactList component using a functional component
const ContactList: FC<ContactListProps> = ({
  contacts,
  handleEdit,
  dispatch,
}) => {
  return (
    <div className="contacts-list">
      {/* Add a title to the list */}
      <h3 className="contacts-list-title">Lista de Contatinhos</h3>
      <div className="contacts-list-table-container">
        {/* Create a table to display the list of contacts */}
        <table className="contacts-list-table">
          {/* Define the header of the table */}
          <thead className="contacts-list-header">
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Endereço</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          {/* Define the body of the table */}
          <tbody>
            {/* Loop through the list of contacts and render a ContactItem component for each contact */}
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id} // Use the contact ID as the key
                {...contact} // Pass all contact properties as props
                handleEdit={handleEdit} // Pass the handleEdit function as a prop
                dispatch={dispatch} // Pass the dispatch function as a prop
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
