import Link from "next/link";
import { useRouter } from "next/router";
import * as B from "./LayoutSidebar.styles";
import { ILayoutSidebarUIProps } from "./LayoutSidebar.types";

const SIDE_MENUS = [
  { name: "찜목록", page: "/myPage/myLike" },
  { name: "예약내역", page: "/myPage/myReservation" },
  { name: "내가쓴글", page: "/myPage/myWrite" },
];

export default function LayoutSideBarUI(props: ILayoutSidebarUIProps) {
  const router = useRouter();
  return (
    <>
      <B.Wrapper>
        <B.SideBar>
          <B.ColumnWrapper>
            <B.Profile src="/images/myPage/DefaultUserImg.svg" />
            <B.UserName>{props.data?.fetchLoginedUser.name}님</B.UserName>
            <Link href="/myPage/myEdit">
              <B.UserButton>
                <a style={{ color: "black" }}>회원정보수정</a>
              </B.UserButton>
            </Link>
          </B.ColumnWrapper>
          <B.RowWrapper>
            {SIDE_MENUS.map((el) => {
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
          </B.RowWrapper>
        </B.SideBar>
      </B.Wrapper>
    </>
  );
}
