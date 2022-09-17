import "antd/dist/antd.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars02 from "../../../commons/searchbar/02/Searchbars02.container";
import * as C from "./CafeList.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CafeListUI(props: any) {
  console.log(props.data);

  return (
    <>
      <C.Wrapper>
        <C.TopWrapper>
          <C.LogoBody>
            <div>
              당신이 원하는 <span>카</span>페들을 <span>모</span>았습니다
            </div>
            <C.LogoImage src="/CAMO.png" />
          </C.LogoBody>

          <C.BigTitle>Reserve Your Cafe</C.BigTitle>
          <C.MiddleText>
            가고 싶은 카페를 찾아서 예약하세요 <br /> 이제 웨이팅 없이 편하게 방문하세요!
          </C.MiddleText>
          <br />

          <C.CafeRegisterBox>
            <Link href="./cafe/new">
              <C.CafeRegister>
                <a>
                  <span>+</span>
                  {/* <span>카페 등록하기</span> */}
                </a>
              </C.CafeRegister>
            </Link>
          </C.CafeRegisterBox>

          <Searchbars02
            refetch={props.refetch}
            refetchCafeListNumber={props.refetchCafeListNumber}
            onChangeKeyword={props.onChangeKeyword}
          />
        </C.TopWrapper>

        <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
          <C.PostAllWrap>
            {props.data?.fetchCafeListsCreatedAt.map((el: any, index: any) => (
              <>
                <C.PostWrapper>
                  <C.imageBox>
                    <C.DetailImage id={el.id} onClick={props.onClickDetail(el)}>
                      {/* <img src={`${props.data?.fetchCafeList?.cafeListImage[0]?.url}`} /> */}

                      <img
                        src={
                          `${el.cafeListImage[0]?.url}`
                            ? `https://storage.googleapis.com/${el.cafeListImage[0]?.url}`
                            : "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }
                      />
                    </C.DetailImage>
                  </C.imageBox>

                  <C.TextWrap>
                    {/* #태그, #{el.cafeListTag[index]?.name} */}
                    {/* #{el.cafeListTag[1]?.name} */}
                    {/* <C.CafeTag key={uuidv4()}> #테스트{el.cafeListTag[0]?.name} &nbsp;</C.CafeTag> */}
                    <C.TagsWrap>
                      {el.cafeListTag?.map(({ name }) => {
                        return <C.CafeTag key={uuidv4()}>{`#${name}`}</C.CafeTag>;
                      })}
                    </C.TagsWrap>
                    <Checkbox
                      className="zzim"
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />

                    <C.CafeName>Title {el.title}</C.CafeName>
                    <C.CafeIntro>
                      {" "}
                      <C.Remarks>{el.remarks}</C.Remarks>
                    </C.CafeIntro>

                    <C.CafeAddress>
                      📍 {el.address} {el.addressDetail}
                    </C.CafeAddress>
                    <C.Date>{getDate(el.createdAt)}</C.Date>
                  </C.TextWrap>
                </C.PostWrapper>
              </>
            ))}
          </C.PostAllWrap>
        </InfiniteScroll>
      </C.Wrapper>
    </>
  );
}
