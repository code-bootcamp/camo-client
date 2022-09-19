import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import * as C from "./CafeDetail.styles";
import { FETCH_CAFE_LIST } from "./CafeDetail.queries";
import { useRouter } from "next/router";

export default function CafeDetailImagePage(props: any) {
  const router = useRouter();

  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: router.query.cafeId },
  });
  // const { data } = useQuery(FETCH_CAFE_LIST);
  console.log("데이타image", data);
  console.log("이미지image[0] url:", data?.fetchCafeList?.cafeListImage[0]?.url);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    auto: false,
  };

  const [mainImageSrc, setMainImageSrc] = useState(
    data?.fetchCafeList.cafeListImage[0]?.url
    //  data?.fetchCafeList.cafeListImage[0]?.url.split(",")[0]
    // data?.fetchCafeList.cafeListImage.isMain
  );

  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    setMainImageSrc(event.currentTarget.id);
  };

  return (
    <C.ImageWrapper>
      <C.MainImage src={`https://storage.googleapis.com/${mainImageSrc}`}></C.MainImage>
      <C.SubImageWrapper>
        <C.StyledSlider {...settings}>
          {data?.fetchCafeList?.cafeListImage[0]?.url.split(",").map((el: any) => {
            console.log("콘솔??", data?.fetchCafeList.cafeListImage[0].url.split(",")[0]);
            return (
              <C.SubImage
                onClick={onClickSubImage}
                key={uuidv4()}
                id={el}
                src={`https://storage.googleapis.com/${el}`}
              ></C.SubImage>
            );
          })}
          {data?.fetchCafeList.cafeListImage[0]?.url.split(",").length < 3 &&
            new Array(3 - data?.fetchCafeList.cafeListImage[0]?.url.split(",").length)
              .fill(1)
              .map((_) => {
                return <div key={uuidv4()}></div>;
              })}
        </C.StyledSlider>
      </C.SubImageWrapper>
    </C.ImageWrapper>
  );
}
