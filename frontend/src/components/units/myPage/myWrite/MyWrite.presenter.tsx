import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../../commons/types/generated/types";
import { IMyWriteUIProps } from "./MyWrite.types";
import PaginationContainer from "../myReservation/pagination/Pagination.container";
import { PaginationWrapper } from "../myReservation/MyReservation.styles";
import Dompurify from "dompurify";

export default function MyWriteUI(props: IMyWriteUIProps) {
  console.log(props.WriteData?.fetchUserMyBoard);
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>내가 쓴 글</B.StayMenu>
          <B.Line />
          {props.WriteData?.fetchUserMyBoard?.map((el: IBoard) => (
            <S.MainWrapper key={uuidv4()}>
              <S.RowWrapper>
                <S.ContentBackGround>
                  <S.ContentWrapper>
                    <S.Title>{el.title}</S.Title>
                    <S.RowWrapper>
                      {typeof window !== "undefined" ? (
                        <S.RightContent
                          dangerouslySetInnerHTML={{
                            __html: Dompurify.sanitize(String(el.contents)),
                          }}
                        ></S.RightContent>
                      ) : (
                        <div></div>
                      )}
                    </S.RowWrapper>
                  </S.ContentWrapper>
                </S.ContentBackGround>
              </S.RowWrapper>
            </S.MainWrapper>
          ))}
          <PaginationWrapper>
            {props.count?.fetchUsermyBoardNumber > 0 && (
              <PaginationContainer
                refetch={props.refetch}
                count={props.count?.fetchUsermyBoardNumber}
              />
            )}
          </PaginationWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
