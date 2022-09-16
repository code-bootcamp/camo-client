// import Head from "next/head";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { breakPoints } from "../../styles/media";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMapComponent {
  address?: string;
}

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export default function MapComponent(props: IMapComponent) {
  useEffect(() => {
    // 스크립트를 받은 후 작동되게
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=a240da9ad17a5376ac92fb0e03a9d3dc&autoload=false&libraries=services";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // console.log(map);

        // const imageSrc = "/images/mapmarker.png"; // 마커이미지의 주소
        // const imageSize = new window.kakao.maps.Size(32, 32); // 마커이미지 크기
        // const imageOption = {
        //   offset: new window.kakao.maps.Point(27, 69),
        // }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.

        // const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        // 마커 표시될 위치
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          // image: markerImage,
        });

        // 마커가 지도 위에 표시 되도록 설정
        marker.setMap(map);

        // 마커가 드래그 가능하게 설정
        marker.setDraggable(true);

        //
        window.kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
          // 클릭한 위도, 경도 정보를 가져옴
          const latlng = mouseEvent.latLng;

          // 마커 위치를 클릭한 위치로 옴
          marker.setPosition(latlng);
        });
      });
    };
  }, []);
  return (
    <>
      <Map id="map"></Map>
    </>
  );
}
