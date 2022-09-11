import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutSideBarUI from "./LayoutSidebar.presenter";
import { FETCH_USER } from "./LayoutSidebar.queries";

export default function LayoutSidebar() {
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState("");
  const { data } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_USER);

  const onClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    const currentMenu = (event.target as HTMLButtonElement).id;
    setCurrentMenu(currentMenu);
    router.push((event.target as HTMLButtonElement).id);
  };

  return <LayoutSideBarUI currentMenu={currentMenu} onClickMenu={onClickMenu} data={data} />;
}
