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
          <form onSubmit={props.handleSubmit(props.onClickUpdate)}>
            <B.StayMenu>회원 정보 수정</B.StayMenu>
            <B.Line />
            <S.Wrapper>
              <S.BodyWrapper>
                <S.RowWrapper>
                  <S.LeftContents>이름</S.LeftContents>
                  <S.RightContents>
                    <S.DefaultInput
                      type="text"
                      placeholder={props.userData?.fetchLoginedUser.name}
                      readOnly={true}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.LeftContents>이메일</S.LeftContents>
                  <S.RightContents>
                    <S.DefaultInput
                      type="text"
                      placeholder={props.userData?.fetchLoginedUser.email}
                      readOnly={true}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.LeftContents>휴대폰 번호</S.LeftContents>
                  <S.RightContents>
                    <S.DefaultInput
                      type="text"
                      placeholder={props.userData?.fetchLoginedUser.phoneNumber || ""}
                      readOnly={true}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.LeftContents>닉네임</S.LeftContents>
                  <S.RightContents>
                    <S.Input
                      id="nickName"
                      type="text"
                      placeholder="닉네임"
                      defaultValue={props.userData?.fetchLoginedUser.nickName || ""}
                      {...props.register("nickName")}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.Error>{props.formState.errors.nickName?.message}</S.Error>
                {/* <S.RowWrapper>
                  <S.LeftContents>현재 비밀번호</S.LeftContents>
                  <S.RightContents>
                    <S.Input
                      id="password"
                      type="password"
                      placeholder="현재 비밀번호"
                      {...props.register("password")}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.Error>{props.formState.errors.password?.message}</S.Error> */}
                <S.RowWrapper>
                  <S.LeftContents>변경 비밀번호</S.LeftContents>
                  <S.RightContents>
                    <S.Input
                      id="password"
                      type="password"
                      placeholder="변경 비밀번호"
                      {...props.register("password")}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.Error>{props.formState.errors.password?.message}</S.Error>
                {/* <S.RowWrapper>
                  <S.LeftContents>변경 비밀번호 확인</S.LeftContents>
                  <S.RightContents>
                    <S.Input
                      id="passwordConfirm"
                      type="password"
                      placeholder="비밀번호 확인"
                      {...props.register("passwordConfirm")}
                    />
                  </S.RightContents>
                </S.RowWrapper>
                <S.Error>{props.formState.errors.passwordConfirm?.message}</S.Error> */}
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
                      <S.DeleteButton type="button">탈퇴</S.DeleteButton>
                    </a>
                  </Link>
                  <S.EditButton>수정</S.EditButton>
                </S.ButtonWrapper>
              </S.BodyWrapper>
            </S.Wrapper>
          </form>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
