import { FunctionComponent } from "react";

interface PropsTypes {
  readonly to: string,
  readonly desccription: string
}

const MenuLink: FunctionComponent<PropsTypes> = props => <a href={props.to} className="mx-6 hover:text-white hover:border-indigo-700 nav-item" >{props.desccription}</a>;

export default MenuLink;