import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import KakaoMap02 from "../../../commons/map/02";
import * as C from "./CafeDetail.styles";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import QuestionUI from "../../../commons/question/Question.presenter";
import RatingPage from "../../../commons/rating";
import Reservation from "../../reservation/Reservation.container";
// import { useRef } from "react";
// import CarouselPage from "./Carousel";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CafeDetailUI(props: any) {
  // 캐러셀 설정
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    // fade: true,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // 초
  };
  // console.log("데이타1", props.data);
  // console.log("이미지[0] url:", props.data?.fetchCafeList?.cafeListImage[0]?.url);

  // const images = useRef([
  //   {
  //     src: `https://storage.googleapis.com/team04-storage/${props.data?.fetchCafeList?.cafeListImage[0]?.url}`,
  //     // src: "/1.png",
  //   },
  // ]);
  // const imgSize = useRef(images.current.length);

  return (
    <>
      <C.Wrapper>
        <C.TopWrapper>
          <C.ContentsWrap>
            <C.ImageBox>
              {/* <CarouselPage /> */}
              {/* 재인 작업중 0921 06:30 */}
              <C.SubImageWrapper>
                <C.StyledSlider {...settings}>
                  {props.data?.fetchCafeList?.cafeListImage?.map((el: any) => (
                    <div key={uuidv4()}>
                      {el.url ? (
                        <C.SubImage
                          src={`https://storage.googleapis.com/team04-storage/${el?.url}`}
                        />
                      ) : (
                        <img src="/noimage.png" alt="이미지없음" />
                      )}
                    </div>
                  ))}
                </C.StyledSlider>
              </C.SubImageWrapper>
              {/* <CarouselPage imgSize={imgSize} images={images} /> */}
              {/* ============== */}
              {/* ============== */}
              <C.ImgSmallBox>
                {props.data?.fetchCafeList?.cafeListImage?.map((el: any) => (
                  <div key={uuidv4()}>
                    {el.url ? (
                      <img
                        src={`https://storage.googleapis.com/team04-storage/${el?.url}`}
                        // onError={props.onErrorImg}
                      />
                    ) : (
                      <>
                        <img src="/noimage.png" alt="이미지없음" />
                      </>
                    )}
                  </div>
                ))}

                {/* <img
                  src={`https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[1]?.url}`}
                />
                <img
                  src={`https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[2]?.url}`}
                /> */}
              </C.ImgSmallBox>
            </C.ImageBox>

            <C.CafeDetailBox>
              <C.Title>
                {props.data?.fetchCafeList?.title}
                {/* 카페 작성자 아이디 === 로그인한 아이디 */}
                {props.data?.fetchCafeList.user?.id === props.userData?.fetchLoginedUser?.id ? (
                  <span>
                    <EditOutlined onClick={props.onClickUpdate} /> &nbsp; &nbsp;
                    <CloseOutlined onClick={props.onClickDelete} />
                  </span>
                ) : (
                  <></>
                )}
              </C.Title>

              <C.LabelBox>
                {/* <C.Label>
                  🎈 작성자 : <span> {props.data?.fetchCafeList?.user.name}</span>
                </C.Label> */}
                <C.Label>
                  <span className="title">📌&nbsp; 카페주소 </span>
                  <span>
                    ( {props.data?.fetchCafeList?.zipcode} )&nbsp;
                    {props.data?.fetchCafeList?.address} &nbsp;
                    {props.data?.fetchCafeList?.addressDetail}
                  </span>
                </C.Label>
                <C.Label>
                  <span className="title">📌&nbsp; 연락처 </span>
                  <span> {props.data?.fetchCafeList?.phone}</span>
                </C.Label>
                <C.Label>
                  <span className="title">📌&nbsp; 영업시간 </span>
                  <span>
                    (Open) {props.data?.fetchCafeList?.startTime} ~ (Close){" "}
                    {props.data?.fetchCafeList?.endTime}{" "}
                  </span>
                </C.Label>
                <C.Label>
                  <span className="title">📌&nbsp; 홈페이지 </span>
                  <span> {props.data?.fetchCafeList?.homepage} </span>
                </C.Label>
                <C.Label>
                  <span className="title">📌&nbsp; 매장소개 </span>
                  <span>{props.data?.fetchCafeList?.remarks}</span>
                </C.Label>
                {/* <C.Label>
                  <span className="tags"> 📌&nbsp; 태그 </span>
                  <span>{props.data?.fetchCafeList?.tags}</span>
                </C.Label> */}
                <C.Label>
                  <span className="title">📌&nbsp; 예약금 </span>{" "}
                  <span>{props.data?.fetchCafeList?.deposit} 원</span>
                </C.Label>
              </C.LabelBox>

              <C.ButtonWrap>
                <C.ZzimBtn id={props.data?.fetchCafeList?.id} onClick={props.onClickFavorite}>
                  찜하기{" "}
                  <Checkbox
                    style={{ paddingBottom: ".2rem" }}
                    className="zzim"
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "gold" }} />}
                  />
                </C.ZzimBtn>

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
          <C.RowWrapper>
            <C.Label2>
              ✨ &nbsp;카페 서비스 <br />
              <div>
                Wifi ㅣ &nbsp;무료주차 1시간 ㅣ &nbsp; 담요 대여
                <br /> <br /> <br />
              </div>
              ☕️ &nbsp;카페 소개 <br />
              <div>
                포근한 인테리어로 언제든지 고객님이 편하게 올수 있는 환경을 만들었습니다.
                <br />
                기본적인 음료 부터 달콤 카페라는 이름에 맞게 달콤한 디저트 또한 준비 있습니다.{" "}
                <br />
                카페에 방문하면 하루 달콤하고 기분좋은 기억을 가져가기 바랍니다.
              </div>
              {typeof window !== "undefined" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(String(props.data?.fetchCafeList?.contents)),
                  }}
                ></div>
              ) : (
                <div></div>
              )}
            </C.Label2>
            <C.ReservationBox>
              <Reservation />
            </C.ReservationBox>
          </C.RowWrapper>

          <C.MapTitle className="map">📌 &nbsp;카페 위치</C.MapTitle>
          <C.MapWrapper>
            <KakaoMap02
              data={props.data?.fetchCafeList}
              address={props.data?.fetchCafeList?.address as string}
              width="100%"
              height="100%"
            />{" "}
          </C.MapWrapper>
          <br />
          <br />
          <br />
          <RatingPage />
          <br />

          <QuestionUI />
        </C.BottomWrapper>
      </C.Wrapper>
    </>
  );
}
