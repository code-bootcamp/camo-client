import { CloseOutlined, EditOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import KakaoMap02 from "../../../commons/map/02";
import Reservation from "../../reservation/Reservation.container";
import * as C from "./CafeDetail.styles";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CafeDetailUI(props: any) {
  console.log(props.data);
  console.log("이미지 url:", props.data?.fetchCafeList?.cafeListImage[0]?.url);
  const IMAGES = [
    "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1564327367919-cb377ea6a88f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1598797259268-14875817f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  ];

  const router = useRouter();

  const onClickUpdate = () => {
    router.push(`/cafe/${router.query.cafeId}/edit`);
  };

  return (
    <>
      <C.Wrapper>
        {/* <C.Title>카페 이름</C.Title> */}
        <C.TopWrapper>
          <C.ContentsWrap>
            <C.ImageBox>
              {/* <img src={`${props.data?.fetchCafeList?.cafeListImage[0]?.url}`} /> */}

              <img
                className="BigImage"
                src={
                  `${props.data?.fetchCafeList.cafeListImage[0]?.url}`
                    ? `https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[0]?.url}`
                    : IMAGES[0]
                }
              />

              <C.ImgSmallBox>
                <img
                  src={`https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[1]?.url}`}
                />
                <img
                  src={`https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[2]?.url}`}
                />
                {/* <img src={IMAGES[1]} />
                <img src={IMAGES[2]} /> */}
              </C.ImgSmallBox>
            </C.ImageBox>

            <C.CafeDetailBox>
              <C.Title>
                {props.data?.fetchCafeList?.title}{" "}
                <span>
                  <EditOutlined onClick={onClickUpdate} /> &nbsp;
                  <CloseOutlined onClick={props.onClickDelete} />
                </span>
              </C.Title>

              <C.Favorite>
                <C.BtnPick isActive={props.isActive} onClick={props.onClickFavorite}>
                  찜
                  <Checkbox
                    className="zzim"
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </C.BtnPick>
              </C.Favorite>
              <C.LabelBox>
                {/* <C.Label>
                  🎈 작성자 : <span> {props.data?.fetchCafeList?.user.name}</span>
                </C.Label> */}
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
                  🎈 홈페이지 :<span> {props.data?.fetchCafeList?.homepage} </span>
                </C.Label>
                <C.Label>
                  🎈 매장소개 : <span>{props.data?.fetchCafeList?.remarks}</span>
                </C.Label>
                <C.Label>
                  🎈 예약금 : <span>{props.data?.fetchCafeList?.deposit} 원</span>
                </C.Label>
              </C.LabelBox>
              <C.ButtonWrap>
                <Link href="/cafe/">
                  <a>
                    <C.ReserveBtn>목록으로</C.ReserveBtn>
                  </a>
                </Link>
              </C.ButtonWrap>
            </C.CafeDetailBox>
          </C.ContentsWrap>
        </C.TopWrapper>
        <C.BottomWrapper>
          <C.Label2>
            <C.ReservationWrap></C.ReservationWrap>
            ✨ &nbsp;카페 서비스 <br />
            <div>
              Wifi ㅣ &nbsp;무료주차 1시간 ㅣ &nbsp; 담요 대여
              <br />
              <br />
              <br />
              <br />
            </div>
            ☕️ &nbsp;카페 소개 <br />
            <div>
              포근한 인테리어로 언제든지 고객님이 편하기 올수 있는 환경을 만들었습니다.
              <br />
              기본적인 음료 부터 달콤 카페라는 이름에 맞게 달콤한 디저트 또한 준비 있습니다. <br />
              카페에 방문하면 하루 달콤하고 기분좋은 기억을 가져가기 바랍니다.
            </div>
            <div>{props.data?.fetchCafeList?.contents}</div>
          </C.Label2>
          <C.Label2>📌 &nbsp;카페 위치</C.Label2>
          <C.MapWrapper>
            <KakaoMap02
              data={props.data?.fetchCafeList}
              address={props.data?.fetchCafeList?.address as string}
              width="100%"
              height="100%"
            />{" "}
          </C.MapWrapper>
        </C.BottomWrapper>
        <Reservation />
      </C.Wrapper>
    </>
  );
}
