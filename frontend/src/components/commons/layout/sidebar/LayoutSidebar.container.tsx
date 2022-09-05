import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState("");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    router.push((event.target as HTMLDivElement).id);
    const currentMenu = (event.target as HTMLDivElement).id;
    setCurrentMenu(currentMenu);
  };

  return <LayoutSideBarUI currentMenu={currentMenu} onClickMenu={onClickMenu} />;
}
