import { MouseEvent } from "react";

export interface ILayoutSidebarUIProps {
  currentMenu: string;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
export interface ISideMenuProps {
  isActive: boolean;
}
