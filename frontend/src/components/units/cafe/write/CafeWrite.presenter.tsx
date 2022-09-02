import {
  AddressButton,
  BR,
  InputBox,
  Lable,
  LableBox,
  RegisterBtn,
  Text,
  Title,
  WebeditorBox,
  Wrapper,
  Zipcode,
  ZipcodeWrapper,
} from "./CafeWrite.styles";

export default function CafeWriteUI() {
  return (
    <>
      <Wrapper>
        <div>
          <Title>카페 등록하기</Title>

          <Text>카페 정보를 입력해주세요. 카페 이미지는 최소 3장이상 등록해주세요</Text>
        </div>

        <LableBox>
          <Lable>카페 이름</Lable>
          <BR /> <BR />
          <InputBox />
          <br />
        </LableBox>

        <LableBox>
          <Lable>카페 주소</Lable>
          <ZipcodeWrapper>
            <Zipcode placeholder="000000" />
            <AddressButton>우편번호 검색</AddressButton>
          </ZipcodeWrapper>
        </LableBox>

        <LableBox>
          <Lable></Lable>
          <InputBox />
        </LableBox>
        <LableBox>
          <Lable>카페 연락처</Lable>
          <InputBox placeholder="010-0000-0000" />
        </LableBox>

        <LableBox>
          <Lable>홈페이지 주소</Lable>
          <InputBox placeholder="카페 홈페이지 주소 또는 블로그, SNS 주소가 있으면 입력해주세요" />
        </LableBox>

        <LableBox>
          <Lable>카페 소개</Lable>
          <WebeditorBox>카페 소개글을 작성해주세요</WebeditorBox>
        </LableBox>

        <LableBox>
          <Lable>예약금</Lable>
          <InputBox placeholder="카페 기본 음료 가격을 입력해주세요" />
        </LableBox>

        <RegisterBtn>등록하기</RegisterBtn>
      </Wrapper>
    </>
  );
}
