// 랜딩페이지

import * as C from "./LaningStyle";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import "animate.css";

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText, ListItemIcon, Drawer, Button, List } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "right";

export default function LandingPage() {
  const [ref, inView] = useInView({
    threshhold: 0.5,
  });

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="로그인">
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <Link href="/login">
            <a>
              <ListItemText primary="로그인" />
            </a>
          </Link>
        </ListItem>
        <ListItem button key="회원가입">
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <Link href="/login/selectSignUp">
            <a>
              <ListItemText primary="회원가입" />
            </a>
          </Link>
        </ListItem>
        <ListItem button key="카페예약">
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <Link href="/cafe">
            <a>
              <ListItemText primary="카페예약" />
            </a>
          </Link>
        </ListItem>
        <ListItem button key="카페등록">
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <Link href="/cafe">
            <a>
              <ListItemText primary="카페등록" />
            </a>
          </Link>
        </ListItem>
        <ListItem button key="커뮤니티">
          <ListItemIcon>
            <KeyboardArrowRight />
          </ListItemIcon>
          <Link href="/cafe">
            <a>
              <ListItemText primary="커뮤니티" />
            </a>
          </Link>
        </ListItem>
      </List>

      {/* <Divider /> */}
    </div>
  );

  return (
    <C.Wrapper>
      <C.MainWrapper>
        <C.ImageWrapper>
          <C.MainImage src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" />
          <C.MenuButton style={{ opacity: "0" }}>
            {(["right"] as Anchor[""]).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </C.MenuButton>
        </C.ImageWrapper>

        <C.MenuTab />
        <C.Logo>
          <Link href="/login/">
            <a>
              {" "}
              <img src="CAMO.png" />
            </a>
          </Link>
        </C.Logo>

        <C.MainTitle>
          당신이 원하는 <br />
          카페들을 모은
          <div>CAMO</div>
        </C.MainTitle>

        <C.MainSmallText>
          <br />
          내가 아는 카페 정보부터 카페 예약까지, <br />
          사람들과 함께 공유해요.
        </C.MainSmallText>
      </C.MainWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <Link href="/cafe/list">
          <C.ReservationImg
            className={inView ? "isActive" : ""}
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </Link>
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <Link href="/community/">
            <C.SliderTitle>Community </C.SliderTitle>
          </Link>
          {/* <C.Bar /> */}
          <C.Subtitle>직접 방문한 카페를 공유해보세요.</C.Subtitle>
        </C.ReservationWrap>
      </C.MiddleWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <Link href="/cafe">
            <C.SliderTitle>Reservation </C.SliderTitle>
          </Link>
          {/* <C.Bar /> */}
          <C.Subtitle>
            마음에 드는 카페를 찾아서 <br /> 예약하고 편하게 방문하세요.
          </C.Subtitle>
        </C.ReservationWrap>
        <Link href="/cafe/community">
          <C.ReservationImg
            className={inView ? "isActive" : ""}
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </Link>
      </C.MiddleWrapper>

      <C.BlendedWrap>
        <C.About>{/* <CoffeeOutlined /> */}</C.About>
        <div>
          <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <C.BlendedText>BLENDED</C.BlendedText>
          <C.BlendedText>CAMO</C.BlendedText>
        </div>
        <C.smallText>
          {/* BLENDED is a team of bootcamp course in CODECAMP. <br />  방문자 자신이 경험한 */}
          카모는 방문자가 경험한 특색있는 카페를 공유할 수 있는 커뮤니티 플랫폼입니다. <br />
          또한 인기있는 카페를 방문하기 전 미리 예약할 수 있는 서비스를 제공합니다.
        </C.smallText>
      </C.BlendedWrap>

      <C.BottomImageWrap>
        <img src="https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      </C.BottomImageWrap>
    </C.Wrapper>
  );
}
