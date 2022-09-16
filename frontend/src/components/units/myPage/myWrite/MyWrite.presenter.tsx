import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../../commons/types/generated/types";
import { IMyWriteUIProps } from "./MyWrite.types";

export default function MyWriteUI(props: IMyWriteUIProps) {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>내가 쓴 글</B.StayMenu>
          <B.Line />
          {props.WriteData?.fetchUserbyId?.board?.map((el: IBoard) => (
            <div key={uuidv4()}>
              <S.MainWrapper>
                <S.RowWrapper>
                  <S.ContentBackGround>
                    <S.ContentWrapper>
                      <S.Title>{el.title}</S.Title>
                      <S.RowWrapper>
                        <S.RightContent>{el.contents}</S.RightContent>
                      </S.RowWrapper>
                    </S.ContentWrapper>
                  </S.ContentBackGround>
                </S.RowWrapper>
              </S.MainWrapper>
            </div>
          ))}
        </B.Body>
      </B.Wrapper>
    </>
  );
}
