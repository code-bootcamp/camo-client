import Link from "next/link";
import KaKaoMap from "../../../commons/map/kakao";
// import ToastEditor from "../../../commons/editor";
import * as S from "./CommunityWrite.styles";

export default function CommunityWriteUI(props) {
  return (
    <S.Wrapper>
      <S.BodyWrapper>
        {/* <S.Title>게시글 등록</S.Title> */}
        <S.TitleInput type="text" placeholder="제목을 입력하세요" {...props.register("title")} />
        <S.TagInput type="text" placeholder="태그를 입력하세요" {...props.register("tags")} />

        <S.ContentWrapper>
          {/* <ToastEditor /> */}
          <S.ContentsReactQuill onChange={props.onChangeContents} />
          {/* <S.Content placeholder="당신의 이야기를 적어주세요✏️"></S.Content> */}
        </S.ContentWrapper>
        <S.AddressTitle>주소</S.AddressTitle>
        <S.MapAddressWrapper>
          <S.MapWrapper>
            <S.Map>
              <KaKaoMap />
            </S.Map>
          </S.MapWrapper>
          <S.AddressWrapper>
            <S.AddressInput type="text" placeholder="12345" />
            <S.AddressButton>주소입력</S.AddressButton>
            <S.AddressDetailWrapper>
              <S.AddressDetailInput />
              <S.AddressDetailInput />
            </S.AddressDetailWrapper>
            <div></div>
            <div></div>
          </S.AddressWrapper>
        </S.MapAddressWrapper>
        <S.BtnWrapper>
          <Link href="/community">
            <a>
              <S.RegisterBtn onClick={props.onClickCreate}>등록</S.RegisterBtn>
            </a>
          </Link>

          <S.CancelBtn onClick={props.onClickCancel}> 취소</S.CancelBtn>
        </S.BtnWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
