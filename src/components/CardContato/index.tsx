import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FC } from "react";

interface CardContactProp {
  name: string;
  tel: string;
  photo?: string;
  role?: string;
}

const CardContato: FC<CardContactProp> = (props) => {
  const PHOTO_URL = "https://github.com/shadcn.png"
  const {name, photo = PHOTO_URL, tel, role = 'N/A' } = props;
  return (
    <button className="flex justify-start border border-slate-300 p-2 rounded bg-violet-50 hover:bg-violet-100 w-96 m-1">
      <Avatar className="flex m-1">
        <AvatarImage src={photo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-2 text-left items-start">
        <h2>{name}</h2>
        <p className=" text-gray-400 text-xs">{role}</p>
        <p>{tel}</p>
      </div>
    </button>
  )
}

export { CardContato }