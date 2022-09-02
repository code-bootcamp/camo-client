import Link from "next/link";
import * as S from "./CommunityWrite.styles";

export default function CommunityWriteUI() {
  return (
    <S.Wrapper>
      <S.BodyWrapper>
        <S.Title>등록하기</S.Title>
        <S.ContentWrapper>
          <S.ContentTitle>제목</S.ContentTitle>
          <S.Input type="text" placeholder="제목을 입력하세요" />
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.ContentTitle>내용</S.ContentTitle>
          <S.ContentInput type="text" placeholder="내용을 입력하세요" />
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.ContentTitle>태그</S.ContentTitle>
          <S.Input type="text" placeholder="#태그" />
        </S.ContentWrapper>
        <S.MapAddressWrapper>
          <S.MapWrapper>
            <div>주소</div>
            <div>지도</div>
          </S.MapWrapper>
          <S.AddressWrapper>
            <S.AddressDetailWrapper>
              <S.AddressInput type="text" placeholder="12345" />
              <button>주소입력</button>
            </S.AddressDetailWrapper>
            <div></div>
            <div></div>
          </S.AddressWrapper>
        </S.MapAddressWrapper>
        <Link href="/community">
          <a>
            <button>등록</button>
          </a>
        </Link>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
