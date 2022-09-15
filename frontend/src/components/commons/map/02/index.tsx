import { useEffect } from "react";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKaKaoMapProps {
  data: any;
  address: string;
  width: string;
  height: string;
}

export const Wrapper = styled.div`
  width: 384px;
  height: 252px;
`;

export default function KakaoMap02(props: IKaKaoMapProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de&autoload=false&libraries=services";
    document.head.appendChild(script); // 쿼리스트링(이주소에 데이터를 두개보냄 &로 묶음)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.485502, 126.8999582), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address || props.data?.fetchCafeList?.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              const imageSrc = "images/Kakao.png"; // 마커이미지의 주소입니다
              const imageSize = new window.kakao.maps.Size(55, 55); // 마커이미지의 크기입니다
              const imageOption = {
                offset: new window.kakao.maps.Point(27, 69),
              }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

              // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
              );

              // 마커를 생성합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <>
      <div id="map" style={{ width: `${props.width}`, height: `${props.height}` }}></div>
    </>
  );
}
