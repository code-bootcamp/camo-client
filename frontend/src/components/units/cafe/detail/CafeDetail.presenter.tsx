import KakaoMap02 from "../../../commons/map/02";
import * as C from "./CafeDetail.styles";

export default function CafeDetailUI() {
  return (
    <>
      <C.Wrapper>
        {/* <C.Title>카페 이름</C.Title> */}
        <C.TopWrapper>
          <C.ContentsWrap>
            <C.ImageBox>
              <div></div>
              <C.ImgSmallBox>
                <img src="https://images.unsplash.com/photo-1591242825378-ba17ddd7975c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" />
                <img src="https://images.unsplash.com/photo-1602956033956-003e7180d339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <img src="https://images.unsplash.com/photo-1586882448657-a2fc2d5106aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
                <img src="https://images.unsplash.com/photo-1565650839149-2c48a094196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80" />
              </C.ImgSmallBox>
            </C.ImageBox>

            <C.CafeDetailBox>
              <C.Title>성수동 대림창고 갤러리</C.Title>
              <C.LabelBox>
                <C.Label>
                  카페주소 &nbsp; l <span>서울 성동구 성수이로 78</span>
                </C.Label>
                <C.Label>
                  연락처 &nbsp;l <span>010-0000-0000</span>
                </C.Label>
                <C.Label>
                  영업시간&nbsp; l <span> 월-금 09:00-22:00 / 토-일 09:00-22:00 </span>
                </C.Label>
                <C.Label>
                  홈페이지 / SNS&nbsp; l <span> https://cafemoment.site/ </span>
                </C.Label>
                <C.Label>
                  매장 서비스 &nbsp; l <span>Wifi / 무료주차 1시간</span>
                </C.Label>
                <C.Label>
                  예약금 &nbsp; l <span>5,000원</span>
                </C.Label>
              </C.LabelBox>
              <C.ButtonWrap>
                <C.ReserveBtn>예약하기</C.ReserveBtn>
              </C.ButtonWrap>
            </C.CafeDetailBox>
          </C.ContentsWrap>
        </C.TopWrapper>
        <C.BottomWrapper>
          <C.Label2>
            카페 소개 <br />
            <div>
              포근한 인테리어로 언제든지 고객님이 편하기 올수 있는 환경을 만들었습니다.기본적인 음료
              부터 달콤 카페라는 이름에 맞게 달콤한 디저트 또한 준비 있습니다. 카페에 방문하면 하루
              달콤하고 기분좋은 기억을 가져가기 바랍니다.
            </div>
          </C.Label2>
          <br /> <br />
          <C.Label2>카페 위치</C.Label2>
          <C.MapWrapper>
            <KakaoMap02 />
          </C.MapWrapper>
        </C.BottomWrapper>
      </C.Wrapper>
    </>
  );
}
