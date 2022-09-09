import Link from "next/link";
import { useRouter } from "next/router";
import * as B from "./LayoutSidebar.styles";
import { ILayoutSidebarUIProps } from "./LayoutSidebar.types";

const SIDE_MENUS = [
  // { name: "회원정보수정", page: "/myPage/myEdit" },
  { name: "찜목록", page: "/myPage/myLike" },
  { name: "예약내역", page: "/myPage/myReservation" },
  { name: "내가쓴글", page: "#" },
];

export default function LayoutSideBarUI(props: ILayoutSidebarUIProps) {
  const router = useRouter();

  // console.log("LayoutSideBarUI", router.asPath);
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
            {SIDE_MENUS.map((el) => {
              console.log("LayoutbarUI", router.asPath, el.page, router.asPath.includes(el.page));
              return (
                <div key={el.page}>
                  <B.SideMenu
                    id={el.page}
                    onClick={props.onClickMenu}
                    isActive={router.asPath.includes(el.page)}
                  >
                    {el.name}
                  </B.SideMenu>
                </div>
              );
            })}
          </B.ColumnWrapper>
        </B.SideMenuWrapper>
      </B.SideBar>
    </>
  );
}
