import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/inputBusca/input";
import { Button } from "@/components/ui/button";
import { CardContato } from "@/components/CardContato";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useContactService } from "@/Services/contact";
import { Phone } from "../../typagem/index";
interface Contato {
  id: string;
  name: string;
  role: string;
  tel: string;
  birth: string;
  photo?: string;
}

const Lista = () => {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const { getContactService, postContactService, deleteContactService } = useContactService();
  const [searchTerm, setSearchTerm] = useState("");
  const [newContact, setNewContact] = useState<Contato>({
    id: "",
    name: "",
    role: "",
    tel: "",
    birth: "",
    photo: undefined,
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContactService();
        if ('contatos' in response) {
          const contactsData: Contato[] = response.contatos as Contato[];
          setContatos(contactsData);
        }
      } catch (error) {
        console.error("Erro ao carregar contatos:", error);
      }
    };
  
    fetchContacts();
  }, []);

  const handleAddContact = async () => {
    if (newContact.name && newContact.tel) {
      try {
        const { name: nome, role: apelido, birth: notas, photo: foto } = newContact;
        const telefones: Phone[] = [{ tipo: 'casa', numero: newContact.tel }];
        // const response = await postContactService({nome, apelido, telefones, notas, foto});
        const response = await postContactService({ nome, apelido, telefones, notas, foto }) as Contato[];
        setContatos(prevState => [...prevState, ...response]);
        setNewContact({
          id: "",
          name: "",
          role: "",
          tel: "",
          birth: "",
          photo: undefined,
        });
      } catch (error) {
        console.error("Erro ao adicionar contato:", error);
      }
    } else {
      alert("Por favor, preencha os campos 'Nome' e 'Telefone'.");
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await deleteContactService({ idContato: id });
      setContatos(prevState => prevState.filter(contato => contato.id !== id));
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  const filteredContacts = contatos.filter(contato => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    return (
      contato.name.toLowerCase().includes(normalizedSearchTerm) ||
      contato.tel.toLowerCase().includes(normalizedSearchTerm) ||
      contato.role.toLowerCase().includes(normalizedSearchTerm)
    );
  });

  return (
    <div className="min-h-dvh min-w-max flex flex-col justify-between text-gray-500">
      <div>
        <header className="flex items-center justify-around border-b-2 h-24">
          <img src="/Logo-contatinhos.png" className="w-32" />
          <Input
            type="text"
            placeholder="Buscar"
            className="w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
        <main className="flex mx-14 flex-col">
          <div className="flex justify-evenly m-2">
            <h2 className="flex justify-center text-2xl m-2">Contatos</h2>
            <Dialog>
              <DialogTrigger className="bg-orange-600 hover:bg-purple-700 text-white text-sm p-3 rounded">
                Adicionar Contato
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar contato</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      value={newContact.name}
                      onChange={(e) =>
                        setNewContact({ ...newContact, name: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">
                      Profissão
                    </Label>
                    <Input
                      id="role"
                      value={newContact.role}
                      onChange={(e) =>
                        setNewContact({ ...newContact, role: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="tel" className="text-right">
                      Telefone
                    </Label>
                    <Input
                      id="tel"
                      value={newContact.tel}
                      onChange={(e) =>
                        setNewContact({ ...newContact, tel: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="birth" className="text-right">
                      Aniversário
                    </Label>
                    <Input
                      id="birth"
                      type="date"
                      value={newContact.birth}
                      onChange={(e) =>
                        setNewContact({ ...newContact, birth: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="photo" className="text-right">
                      Foto
                    </Label>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setNewContact({
                            ...newContact,
                            photo: URL.createObjectURL(e.target.files[0]),
                          });
                        } else {
                          setNewContact({
                            ...newContact,
                            photo: undefined,
                          });
                        }
                      }}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className="bg-orange-600 hover:bg-purple-700"
                    onClick={handleAddContact}
                  >
                    Salvar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {filteredContacts.map(contato => (
            <CardContato
              key={contato.id}
              id={contato.id}
              name={contato.name}
              tel={contato.tel}
              role={contato.role}
              photo={contato.photo ?? ""}
              onDelete={deleteContact}
            />
          ))}
        </main>
      </div>
      <footer className="flex justify-between m-2 text-xs">
        <p>Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024</p>
        <a
          href="https://github.com/Carlos-Gabryel/contatinhos-ADA"
          target="_blank"
        >
          <img src="/github.png" className="w-8" />
        </a>
      </footer>
    </div>
  );
};

export default Lista;
