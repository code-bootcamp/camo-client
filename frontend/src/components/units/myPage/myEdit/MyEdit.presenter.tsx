import { Modal } from "antd";
import Link from "next/link";
import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyEdit.styles";
import { IMyEditUI } from "./MyEdit.types";

export default function MyEditUI(props: IMyEditUI) {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>회원 정보 수정</B.StayMenu>
          <B.Line />
          <S.Wrapper>
            <S.BodyWrapper>
              <S.RowWrapper>
                <S.LeftContents>이름</S.LeftContents>
                <S.RightContents>
                  <S.DefaultInput type="text" placeholder="이름" readOnly={true} />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>이메일</S.LeftContents>
                <S.RightContents>
                  <S.DefaultInput type="text" placeholder="이메일" readOnly={true} />
                </S.RightContents>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.LeftContents>휴대폰 번호</S.LeftContents>
                <S.RightContents>
                  <S.DefaultInput type="text" placeholder="휴대폰 번호" readOnly={true} />
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
              {/* {props.isOpenDeleteModal && (
                <Modal
                  visible={true}
                  onOk={props.onClickOpenDeleteModal}
                  onCancel={props.onClickOpenDeleteModal}
                  closable={false}
                >
                  <div>이메일 입력: </div>
                  <S.EmailInput type="text" onChange={props.onChangeDeleteUser} />
                </Modal>
              )} */}
              <S.ButtonWrapper>
                {/* <S.DeleteButton onClick={props.onClickOpenDeleteModal}>탈퇴</S.DeleteButton> */}
                <Link href="./myEdit/delete">
                  <a>
                    <S.DeleteButton>탈퇴</S.DeleteButton>
                  </a>
                </Link>
                <S.EditButton>수정</S.EditButton>
              </S.ButtonWrapper>
            </S.BodyWrapper>
          </S.Wrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
