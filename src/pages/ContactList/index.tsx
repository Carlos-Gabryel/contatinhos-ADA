import React, { useReducer, FC, useState, useEffect } from "react";
import Header from "/src/components/contactList/Header.tsx";
import ContactForm from "/src/components/contactList/ContactForm.tsx";
import { contactsReducer, AppState } from "/src/reducers/contactsReducer";
import ContactList from "/src/components/contactList/ContactList.tsx";
import { Contact } from "/src/types.ts";
import EditModal from "/src/components/contactList/EditModal.tsx";

// Define the initial state outside of the component to avoid redefining it on every render
const initialState: AppState = {
  contacts: [],
};

const ContactListApp: FC = () => {
  // Use destructuring to assign state and dispatch from useReducer
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  // Use destructuring to assign showModal and dataToEdit from useState
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  // Use useCallback to memoize the handleEdit function
  const handleEdit = React.useCallback(
    (id: number) => {
      setDataToEdit(state.contacts.find((contact) => contact.id === id));
      setShowModal(true); // Use true to show the modal
    },
    [state.contacts]
  );

  // Use useEffect to reset dataToEdit when showModal changes
  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  // Use useCallback to memoize the toggleModal function
  const toggleModal = React.useCallback(() => {
    setShowModal((show) => !show);
  }, []);

  // Use conditional rendering to avoid rendering ContactList when there are no contacts
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      {/* Pass dataToEdit and dispatch to EditModal */}
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </>
  );
};

export default ContactListApp;
