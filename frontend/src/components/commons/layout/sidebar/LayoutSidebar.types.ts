import { MouseEvent } from "react";

export interface ILayoutSidebarUIProps {
  currentMenu: string;
  data: any;
  onClickMenu: (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface ISideMenuProps {
  isActive: boolean;
}
