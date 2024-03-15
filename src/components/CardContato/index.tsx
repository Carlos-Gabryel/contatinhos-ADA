import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatares/avatar"
import { FC } from "react";

import  {BaseSyntheticEvent} from "react"

type Base64 = string
interface CardContactProp {
  id: string;
  name: string;
  tel: string;
  photo?: Base64;
  role?: string;
  onDelete: (id: string) => void;
}

const CardContato: FC<CardContactProp> = ({id, name, tel, photo, role, onDelete}) => {
  const handleDelete = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onDelete(id);
  }

  return (
    <button className="flex justify-start border border-slate-300 p-2 rounded bg-violet-50 hover:bg-violet-100 w-80 m-1">
      <Avatar className="flex m-1">
        <AvatarImage src={photo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-2 text-left items-start">
        <h2>{name}</h2>
        <p className=" text-gray-400 text-xs">{role}</p>
        <p>{tel}</p>
      </div>
      <button  
      className="bg-red-100 mt-5 ml-14 p-1 hover:bg-orange-200 text-xs rounded "  
       onClick={handleDelete}
       >Deletar
       </button>
    </button>

  );
}

export { CardContato };
