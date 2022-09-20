// import Head from "next/head";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMapComponent {
  address?: string;
  data: Pick<IQuery, "fetchBoard">;
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
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de&autoload=false&libraries=services";
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

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.address ? props.address : "서울시 구로구",
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">☕️추천 카페☕️</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );

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
  }, [props.address]);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
}
