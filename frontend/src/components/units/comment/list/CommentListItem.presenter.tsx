// import Modal from "antd/lib/modal/Modal";
import CommentWrite from "../write/CommentWrite.container";
import { CommentListItemUIProps } from "./CommentList.types";
import * as S from "./CommentListItem.styles";
import BasicModal from "./Modal";

export default function CommentListItemUI(props: CommentListItemUIProps) {
  return (
    <>
      {props.isOpenModal && (
        // <Modal visible={true}>
        <BasicModal />
      )}
      {!props.isEdit && (
        <S.Wrapper>
          {/* <div> */}
          {/* <div>유저이미지</div> */}
          <S.User>{props.el.user?.nickName}</S.User>
          {/* </div> */}
          <S.EditWrapper>
            <S.Edit onClick={props.onClickUpdate} />
            수정
            <S.Delete onClick={props.onClickDelete} />
          </S.EditWrapper>
          <S.Comment>{props.el.comment}</S.Comment>
          <S.Footer>
            <S.ReComment />
            <S.CreateAt>{props.el.createdAt}</S.CreateAt>
          </S.Footer>
        </S.Wrapper>
      )}
      {props.isEdit && <CommentWrite isEdit={true} setIsEdit={props.setIsEdit} el={props.el} />}
    </>
  );
}
