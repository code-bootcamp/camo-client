import Link from "next/link";
import * as B from "./LayoutSidebar.styles";
import { ILayoutSidebarUIProps } from "./LayoutSidebar.types";

const SIDE_MENUS = [
  // { name: "회원정보수정", page: "/myPage/myEdit" },
  { name: "찜목록", page: "/myPage/myLike" },
  { name: "예약내역", page: "/myPage/myReservation" },
  { name: "내가쓴글", page: "#" },
];

export default function LayoutSideBarUI(props: ILayoutSidebarUIProps) {
  return (
    <>
      <B.SideBar>
        <B.SideMenuWrapper>
          <B.UserWrapper>
            <B.Profile src="/profile.jpeg" />
            <B.ColumnWrapper>
              <B.UserName>{props.data?.fetchLoginUser.name}님</B.UserName>
              <Link href="/myPage/myEdit">
                <B.UserButton>
                  <a>회원정보수정</a>
                </B.UserButton>
              </Link>
            </B.ColumnWrapper>
          </B.UserWrapper>
          <B.ColumnWrapper>
            {SIDE_MENUS.map((el) => (
              <div key={el.page}>
                <B.SideMenu
                  id={el.page}
                  onClick={props.onClickMenu}
                  isActive={props.currentMenu?.includes(el.page)}
                >
                  {el.name}
                </B.SideMenu>
              </div>
            ))}
          </B.ColumnWrapper>
        </B.SideMenuWrapper>
      </B.SideBar>
    </>
  );
}
