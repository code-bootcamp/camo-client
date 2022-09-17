import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";

import * as S from "./CommunityDetail.styles";
import KakaoMap02 from "../../../commons/map/02";

export default function CommunityDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.TitleHeader>
          <S.Title>{props.BoardData?.fetchBoard?.title}</S.Title>
          {props.BoardData?.fetchBoard.user?.id === props.UserData?.fetchLoginedUser.id ? (
            <S.TitleIconWrapper>
              <S.EditIcon title="수정하기" onClick={props.onClickUpdate} />
              <S.DeleteIcon title="삭제하기" onClick={props.onClickDelete} />
            </S.TitleIconWrapper>
          ) : (
            <></>
          )}
        </S.TitleHeader>
        <S.UserInfoWrapper>
          <S.UserName>{props.BoardData?.fetchBoard?.user?.nickName}</S.UserName>
          <S.LikeWrapper>
            <S.LikeCount>
              {props.BoardData?.fetchBoard.likeCount === null || undefined
                ? 0
                : props.BoardData?.fetchBoard.likeCount}
            </S.LikeCount>
            {/* toggleLikeFeed 값을 스테이트에 담아서 T/F 에 따라 보이는 아이콘 다르게 하기 */}
            {/* {!props.BoardData?.fetchBoard.favoriteBoard.isLike ? (
              <S.LikeIcon onClick={props.onClickLike} />
            ) : (
              <S.DisLikeIcon onClick={props.onClickLike} />
            )} */}
            {props.like ? (
              <S.LikeIcon onClick={props.onClickLike2} />
            ) : (
              <S.DisLikeIcon onClick={props.onClickLike2} />
            )}
          </S.LikeWrapper>
        </S.UserInfoWrapper>
        <S.PostWrapper>
          <S.PostDetail>{getDate(props.BoardData?.fetchBoard?.createdAt)}</S.PostDetail>
          {/* <S.PostDetail>조회수</S.PostDetail>
              <S.PostDetail>댓글</S.PostDetail> */}
        </S.PostWrapper>
      </S.TitleWrapper>

      <S.BodyWrapper>
        <S.ImgWrapper>
          {props.BoardData?.fetchBoard.images[0]?.url !== "" ? (
            <S.MainImgWrapper>
              <S.MainImg
                src={`https://storage.googleapis.com/${props.BoardData?.fetchBoard.images[0]?.url}`}
                alt="이미지"
                onError={props.onErrorImg}
              />
            </S.MainImgWrapper>
          ) : (
            <S.MainImg
              src={`https://storage.googleapis.com/${props.BoardData?.fetchBoard.images[1]?.url}`}
              alt="이미지"
              onError={props.onErrorImg}
            />
          )}

          <S.SubImgWrapper>
            {props.BoardData?.fetchBoard.images.map((el: any) => (
              <div key={uuidv4()}>
                {el.url ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${el?.url}`}
                    onError={props.onErrorImg}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </S.SubImgWrapper>
        </S.ImgWrapper>
        <S.ContentsWrapper>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.BoardData?.fetchBoard?.contents as string),
              }}
            ></S.Contents>
          )}
          <S.AddressWrapper>
            📍위치 | {props.BoardData?.fetchBoard.zipcode} {props.BoardData?.fetchBoard?.address}
            {props.BoardData?.fetchBoard.addressDetail}
          </S.AddressWrapper>
          <S.MapWrapper style={{ overflow: "hidden" }}>
            <KakaoMap02
              data={props.BoardData?.fetchCafeList}
              address={props.daBoardDatata?.fetchCafeList?.address as string}
              width="100%"
              height="100%"
            />
          </S.MapWrapper>
          <S.TagsWrapper>
            {props.BoardData?.fetchBoard.tags?.map((el: any) => (
              <S.Tags key={uuidv4()}>{`#${el.name}`}</S.Tags>
            ))}
          </S.TagsWrapper>
          {/* <S.CommentIcon /> */}
        </S.ContentsWrapper>
        <S.BtnWrapper>
          <Link href="/community/">
            <a>
              <S.ListBtn>목록으로</S.ListBtn>
            </a>
          </Link>
        </S.BtnWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
