import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FETCH_CAFE_LIST } from "./CafeDetail.queries";

export default function CarouselPage(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: router.query.cafeId },
  });

  const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    /* width: 30rem;
    height: 30rem; */
    user-select: none;
    /* background-color: pink; */
    transition: all 0.9 ease-in-out;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .slide {
      display: flex;
      align-items: center;
    }

    .window {
      /* background: #eee; */
      width: 33rem;
      height: 27rem;
      /* width: 100%;
      height: 100%; */
      overflow: hidden;
    }

    .flexbox {
      display: flex;
    }

    .img {
      width: 32rem;
      height: 26rem;
      margin: 0.5rem;
      /* width: 100%;
      height: 100%; */
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 5px;
      flex: none;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 2rem;
      color: #1e3932;
      font-weight: 500;
      /* margin: 1rem; */
      /* background-color: rebeccapurple; */
      /* padding: 0 px; */
    }

    .position {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }

    .dot {
      background: lightgray;
      border-radius: 100%;
      height: 8px;
      width: 8px;
      display: none;
    }
    .dot + .dot {
      margin-left: 20px;
    }

    .current {
      background: gray;
    }
  `;

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: `-${current}00%` });

  // 프리젠터에서 가져옴

  const images = useRef([
    {
      src: `https://storage.googleapis.com/team04-storage/${data?.fetchCafeList?.cafeListImage[0]?.url}}`,
      // {data?.fetchCafeList?.cafeListImage[0]?.url ? (
      // src: `https://storage.googleapis.com/team04-storage/${data?.fetchCafeList?.cafeListImage[0]?.url}`
      // ):
      // (src: "")
      // }
    },
    {
      src: `https://storage.googleapis.com/team04-storage/${data?.fetchCafeList?.cafeListImage[1]?.url}`,
    },
    {
      src: `https://storage.googleapis.com/team04-storage/${data?.fetchCafeList?.cafeListImage[2]?.url}`,
    },
  ]);

  console.log(images);
  const imgSize = useRef(images.current.length);
  //

  const moveSlide = (i) => {
    let nextIndex = current + i;
    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;
    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <>
      <Body>
        <div className="container">
          <div className="slide">
            <div
              className="btn"
              onClick={() => {
                moveSlide(-1);
              }}
            >
              <CaretLeftOutlined />
            </div>

            <div className="window">
              <div className="flexbox" style={style}>
                {images.current.map((img, i) => (
                  <div key={i} className="img" style={{ backgroundImage: `url(${img.src})` }}></div>
                ))}
              </div>
            </div>

            <div
              className="btn"
              onClick={() => {
                moveSlide(1);
              }}
            >
              {/* <RightCircleOutlined/> */}
              {/* <RightSquareOutlined /> */}
              <CaretRightOutlined />
            </div>
          </div>

          <div className="position">
            {images.current.map((x, i) => (
              <div key={i} className={i === current ? "dot current" : "dot"}></div>
            ))}
          </div>
        </div>
      </Body>
    </>
  );
}
