import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import KakaoMap02 from "../../../commons/map/02";
import * as C from "./CafeDetail.styles";

export default function CafeDetailUI(props: any) {
  console.log(props.data);
  return (
    <>
      <C.Wrapper>
        {/* <C.Title>카페 이름</C.Title> */}
        <C.TopWrapper>
          <C.ContentsWrap>
            <C.ImageBox>
              {/* <img src={`${props.data?.fetchCafeList?.cafeListImage[0]?.url}`} /> */}
              <div>{props.data?.fetchCafeList?.cafeListImage[0]?.url}</div>
              <C.ImgSmallBox>
                <img src={`${props.data?.fetchCafeList?.cafeListImage[0]?.url}`} />
                <img src="https://images.unsplash.com/photo-1602956033956-003e7180d339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <img src="https://images.unsplash.com/photo-1586882448657-a2fc2d5106aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
                <img src="https://images.unsplash.com/photo-1565650839149-2c48a094196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80" />
              </C.ImgSmallBox>
            </C.ImageBox>

            <C.CafeDetailBox>
              <C.Title>
                카페명 {props.data?.fetchCafeList?.title}{" "}
                <span>
                  {/* <EditOutlined /> &nbsp; */}
                  <CloseOutlined onClick={props.onClickDelete} />
                </span>
              </C.Title>

              <C.LabelBox>
                <C.Label>
                  🎈 카페주소 :{" "}
                  <span>
                    ( {props.data?.fetchCafeList?.zipcode} )&nbsp;
                    {props.data?.fetchCafeList?.address} &nbsp;
                    {props.data?.fetchCafeList?.addressDetail}
                  </span>
                </C.Label>
                <C.Label>
                  🎈 연락처 : <span> {props.data?.fetchCafeList?.phone}</span>
                </C.Label>
                <C.Label>
                  🎈 영업시간 :{" "}
                  <span>
                    {" "}
                    월-금 {props.data?.fetchCafeList?.startTime} / 토-일{" "}
                    {props.data?.fetchCafeList?.endTime}{" "}
                  </span>
                </C.Label>
                <C.Label>
                  🎈 홈페이지 / SNS : <span> {props.data?.fetchCafeList?.homepage} </span>
                </C.Label>
                <C.Label>
                  🎈 매장 서비스 : <span>Wifi / 무료주차 1시간</span>
                </C.Label>
                <C.Label>
                  🎈 예약금 : <span>{props.data?.fetchCafeList?.deposit} 원</span>
                </C.Label>
              </C.LabelBox>
              <C.ButtonWrap>
                <C.ReserveBtn>예약하기</C.ReserveBtn> &nbsp;&nbsp;&nbsp;
                <Link href="/cafe/">
                  <a>
                    <C.CancelBtn>취소하기</C.CancelBtn>
                  </a>
                </Link>
              </C.ButtonWrap>
            </C.CafeDetailBox>
          </C.ContentsWrap>
        </C.TopWrapper>
        <C.BottomWrapper>
          <C.Label2>
            ☕️ &nbsp;카페 소개 <br />
            <div>
              포근한 인테리어로 언제든지 고객님이 편하기 올수 있는 환경을 만들었습니다.
              <br />
              기본적인 음료 부터 달콤 카페라는 이름에 맞게 달콤한 디저트 또한 준비 있습니다. <br />
              카페에 방문하면 하루 달콤하고 기분좋은 기억을 가져가기 바랍니다.
            </div>
          </C.Label2>
          <C.Label2>📌 &nbsp;카페 위치</C.Label2>
          <C.MapWrapper>
            <KakaoMap02 />
          </C.MapWrapper>
        </C.BottomWrapper>
      </C.Wrapper>
    </>
  );
}
