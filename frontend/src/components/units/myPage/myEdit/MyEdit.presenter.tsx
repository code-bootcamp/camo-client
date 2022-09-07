import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyEdit.styles";

export default function MyEditUI() {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>회원정보수정</B.StayMenu>
          <B.Line />
          <S.Wrapper>
            <S.BodyWrapper>
              <S.RowWrapper>
                <S.LeftContents>이름</S.LeftContents>
                <S.RightContents>
                  <S.DefaultInput type="text" placeholder="이름" />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>이메일</S.LeftContents>
                <S.RightContents>
                  <S.DefaultInput type="text" placeholder="이메일" />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>닉네임</S.LeftContents>
                <S.RightContents>
                  <S.Input type="text" placeholder="닉네임" />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>현재 비밀번호</S.LeftContents>
                <S.RightContents>
                  <S.Input type="text" placeholder="현재 비밀번호" />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>변경 비밀번호</S.LeftContents>
                <S.RightContents>
                  <S.Input type="text" placeholder="변경 비밀번호" />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>변경 비밀번호 확인</S.LeftContents>
                <S.RightContents>
                  <S.Input type="text" placeholder="비밀번호 확인" />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>휴대폰 번호</S.LeftContents>
                <S.RightContents>
                  <S.Input type="text" placeholder="휴대폰 번호" />
                </S.RightContents>
              </S.RowWrapper>
              <S.ButtonWrapper>
                <S.EditButton>수정하기</S.EditButton>
              </S.ButtonWrapper>
            </S.BodyWrapper>
          </S.Wrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
