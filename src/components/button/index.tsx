import { ReactNode, FC, MouseEvent } from "react";
import { TypeButton, TypeButtonEnum } from "./button";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  type?: TypeButton;
  path?: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  disable?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, disable, type, path = "/", onClick } = props;

  if (type === TypeButtonEnum.LINK) {
    return (
      <Link
        to={path}
        onClick={() => {
          onClick && onClick();
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className="" onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
};

export { Button };
