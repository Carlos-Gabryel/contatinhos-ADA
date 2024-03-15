import { useState } from "react";
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

interface Contato {
  id: string;
  name: string;
  role: string;
  tel: string;
  birth: string;
  photo?: string;
}
const Lista = () => {
  const [contatos, setContatos] = useState<Contato[]>([]); // Especifica o tipo como Contato[]

  const [searchTerm, setSearchTerm] = useState("");
  const [newContact, setNewContact] = useState({
    name: "",
    role: "",
    tel: "",
    birth: "",
    photo: undefined,
  });

  const handleAddContact = () => {
    if (newContact.name && newContact.tel) {
      setContatos((prevState) => [
        ...prevState,
        { id: String(Math.random()), ...newContact },
      ]);
      setNewContact({
        name: "",
        role: "",
        tel: "",
        birth: "",
        photo: undefined,
      });
    } else {
      alert("Por favor, preencha os campos 'Nome' e 'Telefone'.");
    }
  };

  const deleteContact = (id: string) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  const filteredContacts = contatos.filter((contato) => {
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
<<<<<<< HEAD
          <img src="/Logo-contatinhos.png" className="w-32" />
          <Input
            type="text"
            placeholder="Buscar"
            className="w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

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
                    {" "}
                    Name{" "}
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
                    {" "}
                    Profissão{" "}
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
                    {" "}
                    Aniversário{" "}
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
        </header>
        <main className="flex mx-14 flex-col">
          <h2 className="flex justify-center text-2xl m-2">Contatos</h2>
          {filteredContacts.map((contato) => (
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
=======
          <img src="/Logo-contatinhos.png" className="w-32"/>
          <Input type="text" placeholder="Buscar" className="w-auto"/>
          

          <div className="flex items-center	">
            <p className="mr-2 text-violet-500">Thomas</p>
            <Avatar >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex mx-14 flex-col">
          <div className="flex justify-evenly m-2">
            <h2 className="flex justify-center text-2xl m-2">Contatos</h2>
            <Dialog>
              <DialogTrigger className="bg-orange-600 hover:bg-purple-700 text-white text-sm 4 p-2 rounded">Adicionar Contato</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar contato</DialogTitle>
                  <DialogDescription>
                    Adicione aqui os dados dos seus contatinhos
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">
                      Profissão
                    </Label>
                    <Input id="role" value="" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="tel" className="text-right">
                      Telefone
                    </Label>
                    <Input id="tel" value="" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="birth" className="text-right">
                      Aniversário
                    </Label>
                    <Input id="birth" type="date" value="" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button className="bg-orange-600 hover:bg-purple-700" type="submit">Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <CardContato name="Dayana Mariano" tel="(99)99999999" role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/81884987?v=4" />
          <CardContato name="Gabryel Machado" tel="(99)99999999" role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/5809009?v=4"/>
          <CardContato name="Juliana Mesquita" tel="(99)99999999"  role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/60270373?v=4"/>
          <CardContato name="Rodrigo contantino" tel="(99)99999999" role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/137124681?v=4"/>

>>>>>>> 93578828b790c01785f78bd8f69469af70360621
        </main>
      </div>
      <footer className="flex justify-between m-2 text-xs	">
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
