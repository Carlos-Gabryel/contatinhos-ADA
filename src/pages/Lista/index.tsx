import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContato } from "@/components/CardContato"

const Lista = () => {
  
  return (
    <div className="min-h-dvh flex flex-col justify-between text-gray-500">
      <div>
        <header className="flex items-center justify-around border-b-2 h-24">
          <img src="/Logo-contatinhos.png" className="w-32"/>
          <Input type="text" placeholder="Buscar" className="w-auto"/>
          <Button className="bg-orange-600 text-xs">Adicionar contato</Button>
          <div className="flex items-center	">
            <p className="mr-2 text-violet-500">Thomas</p>
            <Avatar >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex mx-14 flex-col">
          <h2 className="flex justify-center text-2xl m-2">Contatos</h2>
          <CardContato name="Dayana Mariano" tel="(99)99999999" role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/81884987?v=4" />
          <CardContato name="Gabryel Machado" tel="(99)99999999" role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/5809009?v=4"/>
          <CardContato name="Juliana Mesquita" tel="(99)99999999"  role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/60270373?v=4"/>
          <CardContato name="Rodrigo contantino" tel="(99)99999999" role="Desenvolvedor(a) de Software" photo="https://avatars.githubusercontent.com/u/137124681?v=4"/>

        </main>
      </div>
      <footer className="flex justify-between m-2 text-xs	">
        <p >
          Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024
        </p>
        <a
            href="https://github.com/Carlos-Gabryel/contatinhos-ADA"
            target="_blank"
          >
            <img
              src="/github.png"
              className="w-8"
            />
          </a>
      </footer>
    </div>
  )
}

export default Lista