import * as S from "./LayoutSidebar.styles";
import { ILayoutSidebarUIProps } from "./LayoutSidebar.types";

const SIDE_MENUS = [
  { name: "찜목록", page: "/myPage/myLike" },
  { name: "예약내역", page: "/myPage/myEdit" },
  { name: "정보수정", page: "/myPage/myReservation" },
];

export default function LayoutSideBarUI(props: ILayoutSidebarUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.SideBar>
          {SIDE_MENUS.map((el) => (
            <div key={el.page}>
              <S.SideMenu
                id={el.page}
                onClick={props.onClickMenu}
                isActive={props.currentMenu?.includes(el.page)}
              >
                {el.name}
              </S.SideMenu>
            </div>
          ))}
        </S.SideBar>
        <S.Body></S.Body>
      </S.Wrapper>
    </>
  );
}
