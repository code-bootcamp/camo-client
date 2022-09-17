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
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          {props.data?.fetchBoard.user?.id === props.UserData?.fetchLoginedUser.id ? (
            <S.TitleIconWrapper>
              <S.EditIcon title="수정하기" onClick={props.onClickUpdate} />
              <S.DeleteIcon title="삭제하기" onClick={props.onClickDelete} />
            </S.TitleIconWrapper>
          ) : (
            <></>
          )}
        </S.TitleHeader>
        <S.UserInfoWrapper>
          <S.UserName>{props.data?.fetchBoard?.user?.nickName}</S.UserName>
          <S.LikeWrapper>
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            {!props.data?.fetchBoard.likeCount ? (
              <S.LikeIcon onClick={props.onClickLike} />
            ) : (
              <S.DisLikeIcon onClick={props.onClickLike} />
            )}
          </S.LikeWrapper>
        </S.UserInfoWrapper>
        <S.PostWrapper>
          <S.PostDetail>{getDate(props.data?.fetchBoard?.createdAt)}</S.PostDetail>
          {/* <S.PostDetail>조회수</S.PostDetail>
              <S.PostDetail>댓글</S.PostDetail> */}
        </S.PostWrapper>
      </S.TitleWrapper>

      <S.BodyWrapper>
        <S.ImgWrapper>
          {props.data?.fetchBoard.images[0]?.url !== "" ? (
            <S.MainImgWrapper>
              <S.MainImg
                src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]?.url}`}
                alt="이미지"
                onError={props.onErrorImg}
              />
            </S.MainImgWrapper>
          ) : (
            <S.MainImg
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[1]?.url}`}
              alt="이미지"
              onError={props.onErrorImg}
            />
          )}

          <S.SubImgWrapper>
            {props.data?.fetchBoard.images.map((el: any) => (
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
                __html: Dompurify.sanitize(props.data?.fetchBoard?.contents as string),
              }}
            ></S.Contents>
          )}
          <S.AddressWrapper>
            📍위치 | {props.data?.fetchBoard.zipcode} {props.data?.fetchBoard?.address}
            {props.data?.fetchBoard.addressDetail}
          </S.AddressWrapper>
          <S.MapWrapper style={{ overflow: "hidden" }}>
            <KakaoMap02
              data={props.data?.fetchCafeList}
              address={props.data?.fetchCafeList?.address as string}
              width="100%"
              height="100%"
            />
          </S.MapWrapper>
          <S.TagsWrapper>
            {props.data?.fetchBoard.tags?.map((el: any) => (
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
