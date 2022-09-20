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
import PopUp from "../../../commons/popup";
import { WriteBtn } from "../../community/list/CommunityList.styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CafeListUI(props: any) {
  console.log(props.data);

  return (
    <>
      <C.Wrapper>
        <C.TopWrapper>
          <C.LogoBody>
            {/* <C.LogoImage src="/Final_logo1.png" /> */}

            <div>
              당신이 원하는 <span>카</span>페들을 <span>모</span>았습니다. <br />
              원하는 시간에 예약하고 방문하세요!
            </div>
            {/* <C.LogoImage src="/CAMO.png" /> */}
          </C.LogoBody>

          <C.BigTitle>Reserve Your Cafe</C.BigTitle>
          <C.MiddleText>
            가고 싶은 카페를 찾아서 예약하세요 <br /> 이제 웨이팅 없이 편하게 방문하세요!
          </C.MiddleText>
          <br />

          <C.CafeRegisterBox>
            <Link href="./cafe/new">
              <a>
                <WriteBtn />
              </a>
            </Link>
          </C.CafeRegisterBox>

          <Searchbars02
            refetch={props.refetch}
            refetchCafeListNumber={props.refetchCafeListNumber}
            onChangeKeyword={props.onChangeKeyword}
          />
        </C.TopWrapper>

        {/* <div style={{ border: "1px solid #fff", width: "80%", height: "800px", overflow: "auto" }}> */}
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onFetchMore}
          hasMore={true}
          // useWindow={false}
        >
          <C.PostAllWrap>
            {props.data?.fetchCafeListsCreatedAt.map((el: any, index: any) => (
              <>
                <C.PostWrapper>
                  <C.imageBox>
                    <C.DetailImage key={el.id} id={el.id} onClick={props.onClickDetail(el)}>
                      <img
                        src={
                          `${props.data?.fetchCafeList?.cafeListImage[0]?.url}`
                            ? `https://storage.googleapis.com/team04-storage/${el.cafeListImage[0]?.url}`
                            : "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }
                      />

                      {/* <img
                        src={
                          // el.cafeListImage?.length !== 0 && el.cafeListImage[index]?.isMain
                          props.data?.fetchCafeList?.cafeListImage?.length !== 0 &&
                          props.data?.fetchCafeList?.cafeListImage[index]?.isMain === true
                            ? `https://storage.googleapis.com/team04-storage/${el.cafeListImage[index].url}`
                            : "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }
                      /> */}
                    </C.DetailImage>
                  </C.imageBox>

                  {/*                   
                      {el.cafeListImage[0] ? (
                        <img src={`https://storage.googleapis.com/team04-storage/${el.cafeListImage[0]?.url}`} />
                      ) : (
                        <img src={`https://storage.googleapis.com/team04-storage/${el.cafeListImage[0]?.url}`} />

                        // <img src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                      )} */}

                  <C.TextWrap>
                    {/* #태그, #{el.cafeListTag[index]?.name} */}

                    {/* <C.CafeTag key={uuidv4()}> #테스트{el.cafeListTag[0]?.name} &nbsp;</C.CafeTag> */}
                    <C.TagsWrap>
                      {el.cafeListTag?.map(({ name }: { name: any }) => {
                        return <C.CafeTag key={uuidv4()}>#{name}</C.CafeTag>;
                      })}
                    </C.TagsWrap>
                    <Checkbox
                      id={el.id}
                      onClick={props.onClickFavorite}
                      className="zzim"
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />

                    <C.CafeName> {el.title}</C.CafeName>
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
            <C.PostWrapper2 /> <C.PostWrapper2 />
            <C.PostWrapper2 /> <C.PostWrapper2 />
          </C.PostAllWrap>
        </InfiniteScroll>
        {/* </div> */}
      </C.Wrapper>
      <PopUp />
    </>
  );
}
