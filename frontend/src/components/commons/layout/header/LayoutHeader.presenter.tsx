import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import * as C from "./LayoutHeader.style";
import "animate.css";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowRight } from "@material-ui/icons";
import clsx from "clsx";

import { ILayoutHeaderUIProps } from "./LayoutHeader.types";
import { ListItem, ListItemText, ListItemIcon, List, Button, Drawer } from "@material-ui/core";
import React, { useState } from "react";

// import { CSSTransition } from "react-transition-group"
// const [showbutton, setShowButton] = useState();
// const [show]

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "right";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const [state, setState] = React.useState({
    right: false,
  });

  const classes = useStyles();

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
        // [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/login">
          <ListItem button key="로그인">
            <ListItemIcon>
              <KeyboardArrowRight />
            </ListItemIcon>
            <a style={{ color: "black" }}>
              <ListItemText primary="로그인" />
            </a>
          </ListItem>
        </Link>
        <Link href="/login/selectSignUp">
          <ListItem button key="회원가입">
            <ListItemIcon>
              <KeyboardArrowRight />
            </ListItemIcon>
            <a style={{ color: "black" }}>
              <ListItemText primary="회원가입" />
            </a>
          </ListItem>
        </Link>
        <Link href="/cafe">
          <ListItem button key="카페예약">
            <ListItemIcon>
              <KeyboardArrowRight />
            </ListItemIcon>
            <a style={{ color: "black" }}>
              <ListItemText primary="카페예약" />
            </a>
          </ListItem>
        </Link>
        <Link href="/cafe/new">
          <ListItem button key="카페등록">
            <ListItemIcon>
              <KeyboardArrowRight />
            </ListItemIcon>
            <a style={{ color: "black" }}>
              <ListItemText primary="카페등록" />
            </a>
          </ListItem>
        </Link>
        <Link href="/community">
          <ListItem button key="커뮤니티">
            <ListItemIcon>
              <KeyboardArrowRight />
            </ListItemIcon>
            <a style={{ color: "black" }}>
              <ListItemText primary="커뮤니티" />
            </a>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <>
      <C.Wrapper>
        <C.HeaderWrapper>
          <C.LogoMenuWrapper>
            <h1>
              <Link href="/">
                <a>
                  <C.Logo src="/Final_logo1.png" alt="logo" />
                </a>
              </Link>
            </h1>

            <C.MenuWrapper>
              <Link href="/">
                <a>
                  <C.MenuFonts>BLENDED</C.MenuFonts>
                </a>
              </Link>

              <Link href="/cafe">
                <a>
                  <C.MenuFonts>CAFE</C.MenuFonts>
                </a>
              </Link>

              <Link href="/community">
                <a>
                  <C.MenuFonts>COMMUNITY</C.MenuFonts>
                </a>
              </Link>
              {props.accessToken ? (
                <Link href="/myPage/myLike">
                  <a>
                    <C.MenuFonts>MY PAGE</C.MenuFonts>
                  </a>
                </Link>
              ) : (
                <a></a>
              )}
            </C.MenuWrapper>
          </C.LogoMenuWrapper>

          {props.accessToken ? (
            <C.LoginWrapper>
              <C.LoginUser>
                <UserOutlined />
                &nbsp;
                {props.data?.fetchLoginedUser.name}님
              </C.LoginUser>
              <C.LoginButton onClick={props.onClickLogout}>로그아웃</C.LoginButton>
              <C.MenuTab />
              <C.MenuButton id="none" style={{ opacity: "0" }}>
                {(["right"] as Anchor[]).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </C.MenuButton>
            </C.LoginWrapper>
          ) : (
            <C.LoginWrapper>
              <Link href="/login">
                <a>
                  <C.LoginButton>로그인</C.LoginButton>
                </a>
              </Link>
              <Link href="/login/selectSignUp">
                <a>
                  <C.LoginButton>회원가입</C.LoginButton>
                </a>
              </Link>
              <C.MenuTab />
              {/* 이거 콘솔에 에러나요 .. */}
              <C.MenuButton id="none" style={{ opacity: "0" }}>
                {(["right"] as Anchor[]).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </C.MenuButton>
            </C.LoginWrapper>
          )}
        </C.HeaderWrapper>
      </C.Wrapper>
    </>
  );
}
