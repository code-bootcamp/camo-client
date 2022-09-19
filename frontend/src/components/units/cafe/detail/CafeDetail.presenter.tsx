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
import CafeDetailImagePage from "./CafeImage";
import MainPageQuestionContainer from "../../../commons/mainPageQuestion/mainPageQuestion.container";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CafeDetailUI(props: any) {
  console.log("데이타1", props.data);
  console.log("이미지[0] url:", props.data?.fetchCafeList?.cafeListImage[0]?.url);
  // const IMAGES = [
  //   "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //   "https://images.unsplash.com/photo-1564327367919-cb377ea6a88f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  // ];

  return (
    <>
      <C.Wrapper>
        <C.TopWrapper>
          <C.ContentsWrap>
            <C.ImageBox>
              {props.data?.fetchCafeList.cafeListImage[0]?.url !== "" ? (
                <img
                  className="BigImage"
                  src={`https://storage.googleapis.com/${props.data?.fetchCafeList.cafeListImage[0]?.url}`}
                  alt="이미지"
                />
              ) : (
                <img className="BigImage" src="/noimage.png" alt="이미지없음" />
              )}
              <C.ImgSmallBox>
                {props.data?.fetchCafeList.cafeListImage.map((el: any) => (
                  <div key={uuidv4()}>
                    {el.url ? (
                      <img
                        src={`https://storage.googleapis.com/${el?.url}`}
                        onError={props.onErrorImg}
                      />
                    ) : (
                      <>
                        <img src="/noimage.png" alt="이미지없음" />
                      </>
                    )}
                  </div>
                ))}

                {/* <img
                  src={
                    `${props.data?.fetchCafeList.cafeListImage[1]?.url}`
                      ? `https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[1]?.url}`
                      : ""
                  }
                />
                <img
                  src={
                    `${props.data?.fetchCafeList.cafeListImage[2]?.url}`
                      ? `https://storage.googleapis.com/${props.data?.fetchCafeList?.cafeListImage[2]?.url}`
                      : ""
                  }
                /> */}

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
                {props.data?.fetchCafeList?.title}{" "}
                <span>
                  <EditOutlined onClick={props.onClickUpdate} /> &nbsp;
                  <CloseOutlined onClick={props.onClickDelete} />
                </span>
              </C.Title>

              <C.Favorite id={props.data?.fetchCafeList?.id} onClick={props.onClickFavorite}>
                <C.BtnPick>
                  🎈 찜하기
                  <Checkbox
                    // isActive={props.isActive}
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
                  <span className="title"> 🎈 카페주소 </span>
                  <span>
                    ( {props.data?.fetchCafeList?.zipcode} )&nbsp;
                    {props.data?.fetchCafeList?.address} &nbsp;
                    {props.data?.fetchCafeList?.addressDetail}
                  </span>
                </C.Label>
                <C.Label>
                  <span className="title">🎈 연락처 </span>
                  <span> {props.data?.fetchCafeList?.phone}</span>
                </C.Label>
                <C.Label>
                  <span className="title"> 🎈 영업시간 </span>
                  <span>
                    {" "}
                    월-금 {props.data?.fetchCafeList?.startTime} / 토-일{" "}
                    {props.data?.fetchCafeList?.endTime}{" "}
                  </span>
                </C.Label>
                <C.Label>
                  <span className="title"> 🎈 홈페이지 </span>
                  <span> {props.data?.fetchCafeList?.homepage} </span>
                </C.Label>
                <C.Label>
                  <span className="title"> 🎈 매장소개 </span>
                  <span>{props.data?.fetchCafeList?.remarks}</span>
                </C.Label>
                <C.Label>
                  <span className="title">🎈 예약금 </span>{" "}
                  <span>{props.data?.fetchCafeList?.deposit} 원</span>
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
            {/* <C.Container>
              <C.TestButton
                style={{ overflow: "hidden" }}
                onClick={handleClickButton}
                name={content}
                // name={props.name}
              >
                1번 버튼{" "}
                <img
                  id="1"
                  src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </C.TestButton>

              {content ? <C.Content>{selectComponent[content]}</C.Content> : <div>없음</div>}
            </C.Container> */}
            <C.ReservationWrap></C.ReservationWrap>
            ✨ &nbsp;카페 서비스 <br />
            <div>
              Wifi ㅣ &nbsp;무료주차 1시간 ㅣ &nbsp; 담요 대여
              <br /> <br /> <br /> <br />
            </div>
            ☕️ &nbsp;카페 소개 <br />
            <div>
              포근한 인테리어로 언제든지 고객님이 편하게 올수 있는 환경을 만들었습니다.
              <br />
              기본적인 음료 부터 달콤 카페라는 이름에 맞게 달콤한 디저트 또한 준비 있습니다. <br />
              카페에 방문하면 하루 달콤하고 기분좋은 기억을 가져가기 바랍니다.
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchCafeList?.contents as string),
              }}
            ></div>
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
          <br />
          <br />
          <br />
          <RatingPage />
          <br />

          <QuestionUI />
        </C.BottomWrapper>
        <CafeDetailImagePage />
        {/* <Reservation /> */}
      </C.Wrapper>
    </>
  );
}
