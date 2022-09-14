import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";

import * as S from "./CommunityDetail.styles";
import KakaoMapPage from "../../../commons/map/01";
import { useRouter } from "next/router";

export default function CommunityDetailUI(props: any) {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>제목 : {props.data?.fetchBoard?.title}</S.Title>
        <S.UserWrapper>
          <S.UserImg></S.UserImg>
          <S.UserInfoWrapper>
            <S.UserName>이름 : {props.data?.fetchBoard?.user?.name}</S.UserName>
            <S.UserName>닉네임 : {props.data?.fetchBoard?.user?.nickName}</S.UserName>

            <S.PostWrapper>
              <S.PostDetail>게시일 : {getDate(props.data?.fetchBoard?.createdAt)}</S.PostDetail>
              {/* <S.PostDetail>조회수</S.PostDetail>
              <S.PostDetail>댓글</S.PostDetail> */}
            </S.PostWrapper>
          </S.UserInfoWrapper>
        </S.UserWrapper>
      </S.TitleWrapper>
      <hr />
      <S.ContentsWrapper>
        <div>
          {props.data?.fetchBoard.images?.[0] !== "" ? (
            <>
              <S.MainImg
                src={`https://storage.googleapis.com/${props.data?.fetchBoard.images?.[0]}`}
                alt="이미지"
              />
            </>
          ) : (
            <>
              <S.MainImg />
            </>
          )}
        </div>
        {/* <S.MainImg> {props.data?.fetchBoard?.images[0]}</S.MainImg> */}

        {/* 0912 예은담당 이미지, 내용 오류있음 */}
        <S.ImgWrapper>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.SubImg key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
          <S.SubImg></S.SubImg>
          {(props.data?.fetchBoard.images || []).map(({ url }) => {
            return <S.SubImg key={uuidv4()}>{url}</S.SubImg>;
          })}
        </S.ImgWrapper>

        <S.Contents>내용:</S.Contents>
        {typeof window !== "undefined" && (
          <S.Contents
            style={{ border: "1px solid gray", width: "100%", height: "20rem" }}
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchBoard?.contents as string),
            }}
          ></S.Contents>
        )}
        <S.AddressWrapper>
          주소: {props.data?.fetchBoard.zipcode}&nbsp;/ {props.data?.fetchBoard?.address}
          &nbsp;/&nbsp; {props.data?.fetchBoard.addressDetail}
        </S.AddressWrapper>
        <hr />
        <S.MapWrapper style={{ overflow: "hidden" }}>
          <KakaoMapPage
            data={props.data?.fetchBoard}
            address={props.data?.fetchBoard.zipcode as string}
          />
        </S.MapWrapper>

        <div>
          태그:
          {/* {props.data?.fetchBoard.tags.name} */}
          {(props.data?.fetchBoard.tags || []).map(({ name }) => {
            return <div key={uuidv4()}>{`#${name}`}</div>;
          })}
        </div>
        {/* <S.Tags>
          #태그:
          {props.data?.fetchBoard.tags?.map((el, index) => (
            <div key={uuidv4()}># {el}</div>
          ))}
        </S.Tags> */}
        <S.ContentsIcons>
          <S.CommentIcon />
          30
          <S.LikeIcon />
          70
        </S.ContentsIcons>
      </S.ContentsWrapper>
      <br />
      <S.ListBtn onClick={props.onClickDelete}>삭제하기</S.ListBtn>
      <br />
      <Link href="/community/">
        <a>
          <S.ListBtn>목록으로</S.ListBtn>
        </a>
      </Link>
      <hr />
    </S.Wrapper>
  );
}
