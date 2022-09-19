import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";

import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.TitleHeader>
          <S.Title>{props.dataBoard?.fetchBoard?.title}</S.Title>
          {props.dataBoard?.fetchBoard.user?.id === props.dataUser?.fetchLoginedUser.id ? (
            <S.TitleIconWrapper>
              <S.EditIcon title="수정하기" onClick={props.onClickUpdate} />
              <S.DeleteIcon title="삭제하기" onClick={props.onClickDelete} />
            </S.TitleIconWrapper>
          ) : (
            <></>
          )}
        </S.TitleHeader>
        <S.UserInfoWrapper>
          <S.UserName>{props.dataBoard?.fetchBoard?.user?.nickName}</S.UserName>
          <S.LikeWrapper>
            <S.LikeCount>
              {props.dataBoard?.fetchBoard.likeCount === null || undefined
                ? 0
                : props.dataBoard?.fetchBoard.likeCount}
            </S.LikeCount>
            {/* toggleLikeFeed 값을 스테이트에 담아서 T/F 에 따라 보이는 아이콘 다르게 하기 */}
            {/* {!props.dataBoard?.fetchBoard.favoriteBoard.isLike ? (
              <S.LikeIcon onClick={props.onClickLike} />
            ) : (
              <S.DisLikeIcon onClick={props.onClickLike} />
            )} */}
            {props.like ? (
              <S.LikeIcon onClick={props.onClickLike} />
            ) : (
              <S.DisLikeIcon onClick={props.onClickLike} />
            )}
          </S.LikeWrapper>
        </S.UserInfoWrapper>
        <S.PostWrapper>
          <S.PostDetail>{getDate(props.dataBoard?.fetchBoard?.createdAt)}</S.PostDetail>
          {/* <S.PostDetail>조회수</S.PostDetail>
              <S.PostDetail>댓글</S.PostDetail> */}
        </S.PostWrapper>
      </S.TitleWrapper>

      <S.BodyWrapper>
        <S.ImgWrapper>
          {props.dataBoard?.fetchBoard.images[0]?.url !== "" ? (
            <S.MainImgWrapper>
              <S.MainImg
                src={`https://storage.googleapis.com/team04-storage/${props.dataBoard?.fetchBoard.images[0]?.url}`}
                alt="이미지"
                onError={props.onErrorImg}
              />
            </S.MainImgWrapper>
          ) : (
            <S.MainImg
              src={`https://storage.googleapis.com/team04-storage/${props.dataBoard?.fetchBoard.images[1]?.url}`}
              alt="이미지"
              onError={props.onErrorImg}
            />
          )}

          <S.SubImgWrapper>
            {props.dataBoard?.fetchBoard.images.map((el: any) => (
              <div key={uuidv4()}>
                {el.url ? (
                  <S.Img
                    src={`https://storage.googleapis.com/team04-storage/${el?.url}`}
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
                __html: Dompurify.sanitize(props.dataBoard?.fetchBoard?.contents as string),
              }}
            ></S.Contents>
          )}
          <S.AddressWrapper>
            📍위치 | {props.dataBoard?.fetchBoard.zipcode} {props.dataBoard?.fetchBoard?.address}
            {props.dataBoard?.fetchBoard.addressDetail}
          </S.AddressWrapper>
          <S.MapWrapper style={{ overflow: "hidden" }}></S.MapWrapper>
          <S.TagsWrapper>
            {props.dataBoard?.fetchBoard.tags?.map((el: any) => (
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
