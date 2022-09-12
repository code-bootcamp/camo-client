import * as C from "./LayoutFooter.style";

export default function LayoutFooterUI() {
  return (
    <>
      <C.Footer>
        <div>
          <C.FooterText>Cafe Moment 소개</C.FooterText>
          <C.FooterText>cafemoment.site</C.FooterText>
          <C.FooterText>Contact with Us</C.FooterText>
          <C.FooterText>(000) 8282-1234</C.FooterText>
        </div>
        <C.FooterText2>
          평일 10:00~17:00 | 점심시간 12:30~14:00 주말 및 공휴일 휴무
          <br /> <br />
          (주)카모 서울특별시 구로구 디지털로 300 13층 Made by 2022 CAMO Corp.
          <br /> © 2022 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
        </C.FooterText2>
      </C.Footer>
    </>
  );
}
