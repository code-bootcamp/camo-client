import { Modal } from "antd";
import Link from "next/link";
import DaumPostcodeEmbed from "react-daum-postcode";
import Upload from "../../../../commons/upload/Upload.container";
import KaKaoMap from "../../../commons/map/kakao";
import { v4 as uuidv4 } from "uuid";

// import ToastEditor from "../../../commons/editor";
import * as S from "./CommunityWrite.styles";

export default function CommunityWriteUI(props) {
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
              type="primary"
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
          <span>&nbsp;&nbsp;&nbsp;l&nbsp;&nbsp; 글쓰기</span>
        </S.TopTitle>
      </S.TopTitleWrap>
      <S.Form onSubmit={props.handleSubmit(props.onClickCreate)}>
        <S.BodyWrapper>
          {/* <S.Title>게시글 등록</S.Title> */}
          <S.Lable>제목</S.Lable>
          <S.TitleInput type="text" placeholder="제목을 입력하세요" {...props.register("title")} />
          <S.Lable>내용</S.Lable>
          <S.ContentWrapper>
            {/* <ToastEditor /> */}
            <S.ContentsReactQuill onChange={props.onChangeContents} />
            {/* <S.Content placeholder="당신의 이야기를 적어주세요✏️"></S.Content> */}
          </S.ContentWrapper>
          <S.Lable>이미지</S.Lable>
          <S.ImageWrap>
            {props.fileUrls.map((el, index) => (
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
              <S.Map>
                <KaKaoMap data={props.data} address={props.address} />
              </S.Map>
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
            {/* <Link href="/community"> */}
            <a>
              <S.RegisterBtn onClick={props.onClickCreate}>등록</S.RegisterBtn>
            </a>
            {/* </Link> */}

            <S.CancelBtn type="button" onClick={props.onClickCancel}>
              취소
            </S.CancelBtn>
          </S.BtnWrapper>
        </S.BodyWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
