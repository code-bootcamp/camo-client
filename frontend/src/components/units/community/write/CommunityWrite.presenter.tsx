import * as S from "./CommunityWrite.styles";

export default function CommunityWriteUI() {
  return (
    <S.Wrapper>
      <S.BodyWrapper>
        <S.Title>등록하기</S.Title>
        <div>
          <div>제목</div>
          <input />
        </div>
        <div>
          <div>내용</div>
          <input />
        </div>
        <div>
          <div>태그</div>
          <input />
        </div>
        <S.MapAddressWrapper>
          <div>
            <div>주소</div>
            <div>지도</div>
          </div>
          <div>
            <div>
              <input />
              <button>주소입력</button>
            </div>
            <div></div>
            <div></div>
          </div>
        </S.MapAddressWrapper>
        <button>등록</button>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
