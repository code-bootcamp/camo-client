import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import Upload from "../../../../commons/upload/Upload.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CommunityWrite.styles";
import MapComponent from "../../../commons/map/01";
import dynamic from "next/dynamic";
import { ICommunityUIProps } from "./CommunityWrite.types";

const ToastUi = dynamic(() => import("../../../commons/editor"), {
  ssr: false,
});

export default function CommunityWriteUI(props: ICommunityUIProps) {
  return (
    <S.Wrapper>
      {props.isAddressOpen && (
        <Modal
          visible={true}
          closable={false}
          footer={[
            <button
              key="closeModal"
              id="modalClose"
              // type="primary"
              onClick={props.onClickAddressModal}
            >
              취소
            </button>,
          ]}
        >
          <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}

      <S.TopTitleWrap>
        <S.TopTitle>
          COMMUNITY
          <span> | 글쓰기</span>
        </S.TopTitle>
      </S.TopTitleWrap>
      <S.Form onSubmit={props.handleSubmit(props.onClickCreate)}>
        <S.BodyWrapper>
          <S.Lable>제목</S.Lable>
          <S.TitleInput type="text" placeholder="제목을 입력하세요" {...props.register("title")} />
          <S.Lable>내용</S.Lable>
          <S.ContentWrapper>
            <ToastUi
              defaultValue={props.editData?.fetchBoard.contents}
              editorRef={props.editorRef}
              onChangeContent={props.onChangeContent}
            />
            {/* <S.ContentsReactQuill onChange={props.onChangeContents} /> */}
            {/* <S.Content placeholder="당신의 이야기를 적어주세요✏️"></S.Content> */}
          </S.ContentWrapper>
          <S.Lable>이미지</S.Lable>
          <S.ImageWrap>
            {props.fileUrls.map((el: any, index: any) => (
              <Upload
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageWrap>
          <S.Lable>태그</S.Lable>
          <S.TagInput type="text" placeholder="태그, 태그, 태그" {...props.register("tags")} />
          <S.Lable>주소</S.Lable>{" "}
          <S.MapAddressWrapper>
            <S.MapWrapper>
              <MapComponent address={props.address} />
            </S.MapWrapper>
            <S.AddressWrapper>
              <S.AddressInput
                type="text"
                placeholder="000000"
                readOnly
                {...props.register("zipcode")}
              />
              <S.AddressButton
                type="button"
                id="modalOpen"
                onSubmit={props.handleSubmit(props.onClickAddressModal)}
              >
                주소입력
              </S.AddressButton>
              <S.AddressDetailWrapper>
                <S.AddressDetailInput readOnly {...props.register("address")} />
                <S.AddressDetailInput {...props.register("addressDetail")} />
              </S.AddressDetailWrapper>
              <div></div>
              <div></div>
            </S.AddressWrapper>
          </S.MapAddressWrapper>
          <S.BtnWrapper>
            <S.RegisterBtn onSubmit={props.handleSubmit(props.onClickCreate)}>등록</S.RegisterBtn>

            <S.CancelBtn type="button" onSubmit={props.handleSubmit(props.onClickCancel)}>
              취소
            </S.CancelBtn>
          </S.BtnWrapper>
        </S.BodyWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
