import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CommunityWrite.styles";
import MapComponent from "../../../commons/map/01";
import dynamic from "next/dynamic";
import { ICommunityUIProps } from "./CommunityWrite.types";
// import KakaoMap02 from "../../../commons/map/02";
import Upload from "../../../commons/upload/01/Upload.container";

const ToastUI = dynamic(() => import("../../../commons/editor"), {
  ssr: false,
});

export default function CommunityWriteUI(props: ICommunityUIProps) {
  // console.log(props.formState);
  return (
    <S.Wrapper>
      {props.isAddressOpen && (
        <Modal
          visible={true}
          closable={false}
          footer={[
            <button key="closeModal" id="modalClose" onClick={props.onClickAddressModal}>
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
          <span>{props.isEdit ? " | 글쓰기 수정" : " | 글쓰기"}</span>
        </S.TopTitle>
      </S.TopTitleWrap>
      <S.Form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickEdit)
            : props.handleSubmit(props.onClickCreate)
        }
      >
        <S.BodyWrapper>
          <S.Label>제목</S.Label>
          <S.TitleInput
            type="text"
            placeholder="제목을 입력해주세요"
            {...props.register("title")}
          />
          <S.Label>내용</S.Label>
          <S.ContentWrapper>
            <ToastUI
              initialValue={props.data?.fetchBoard.contents}
              editorRef={props.editorRef}
              onChangeContents={props.onChangeContents}
            />
            {/* <S.ContentsReactQuill onChange={props.onChangeContents} /> */}
          </S.ContentWrapper>
          <S.Label>이미지</S.Label>
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
          <S.Label>태그</S.Label>
          <S.TagInput type="text" placeholder="태그를 입력해주세요" {...props.register("tags")} />
          <S.Label>주소</S.Label>{" "}
          <S.MapAddressWrapper>
            <S.MapWrapper>
              <MapComponent data={String(props.data?.fetchBoard.address)} address={props.address} />
              {/* <KakaoMap02
                data={props.data?.fetchBoard}
                address={props.data?.fetchBoard?.address as string}
                width="100%"
                height="100%"
              /> */}
            </S.MapWrapper>
            <S.AddressWrapper>
              <S.AddressInput
                type="text"
                placeholder="000000"
                readOnly
                {...props.register("zipcode")}
              />
              <S.AddressButton type="button" id="modalOpen" onClick={props.onClickAddressModal}>
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
            <S.RegisterBtn type="submit">등록</S.RegisterBtn>

            <S.CancelBtn type="button" onClick={props.onClickCancel}>
              취소
            </S.CancelBtn>
          </S.BtnWrapper>
        </S.BodyWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
