import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import * as S from "./CommunityDetail.styles";
import MapComponent from "../../../commons/map/01";

export default function CommunityDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.TitleHeader>
          <S.Title>{props.dataBoard?.fetchFreeBoard?.title}</S.Title>
          {props.dataBoard?.fetchFreeBoard.user?.id === props.dataUser?.fetchLoginedUser.id ? (
            <S.TitleIconWrapper>
              <S.EditIcon title="수정하기" onClick={props.onClickUpdate} />
              <S.DeleteIcon title="삭제하기" onClick={props.onClickDelete} />
            </S.TitleIconWrapper>
          ) : (
            <></>
          )}
        </S.TitleHeader>
        <S.UserInfoWrapper>
          <S.UserName>{props.dataBoard?.fetchFreeBoard?.user?.nickName}</S.UserName>
          <S.LikeWrapper>
            <S.LikeCount>
              {props.dataBoard?.fetchFreeBoard.likeCount === null || undefined
                ? 0
                : props.dataBoard?.fetchFreeBoard.likeCount}
            </S.LikeCount>
            {props.like ? (
              <S.LikeIcon onClick={props.onClickLike} />
            ) : (
              <S.DisLikeIcon onClick={props.onClickLike} />
            )}
          </S.LikeWrapper>
        </S.UserInfoWrapper>
        <S.PostWrapper>
          <S.PostDetail>{getDate(props.dataBoard?.fetchFreeBoard?.createdAt)}</S.PostDetail>
        </S.PostWrapper>
      </S.TitleWrapper>

      <S.BodyWrapper>
        <S.ImgWrapper>
          {props.dataBoard?.fetchFreeBoard.images?.[0]?.url !== "" ? (
            <S.MainImgWrapper>
              <S.MainImg
                src={`https://storage.googleapis.com/team04-storage/${props.dataBoard?.fetchFreeBoard.images?.[0]?.url}`}
                alt="이미지"
                onError={props.onErrorImg}
              />
            </S.MainImgWrapper>
          ) : (
            <S.MainImgWrapper>
              <S.MainImg
                src={`https://storage.googleapis.com/team04-storage/${props.dataBoard?.fetchFreeBoard.images[1]?.url}`}
                alt="이미지"
                onError={props.onErrorImg}
              />
            </S.MainImgWrapper>
          )}

          <S.SubImgWrapper>
            {props.dataBoard?.fetchFreeBoard.images?.map((el: any) => (
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
                __html: Dompurify.sanitize(props.dataBoard?.fetchFreeBoard?.contents as string),
              }}
            ></S.Contents>
          )}
          <S.AddressWrapper>
            <S.AddressTitle>📍위치 |</S.AddressTitle>
            <S.Address>
              {props.dataBoard?.fetchFreeBoard.zipcode} {props.dataBoard?.fetchFreeBoard?.address}
            </S.Address>
            {props.dataBoard?.fetchFreeBoard.addressDetail}
          </S.AddressWrapper>
          <S.MapWrapper>
            <MapComponent
              data={props.dataBoard?.fetchFreeBoard}
              address={(props.dataBoard?.fetchFreeBoard?.address as string) || ""}
            />
          </S.MapWrapper>
          <S.FooterWrapper>
            <S.TagsWrapper>
              {props.dataBoard?.fetchFreeBoard.tags?.map((el: any) =>
                el.name === "" ? <></> : <S.Tags key={uuidv4()}>{`#${el.name}`}</S.Tags>
              )}
            </S.TagsWrapper>
            <S.BtnWrapper>
              <Link href="/community/">
                <a>
                  <S.ListBtn>목록으로</S.ListBtn>
                </a>
              </Link>
            </S.BtnWrapper>
          </S.FooterWrapper>
          {/* <S.CommentIcon /> */}
        </S.ContentsWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
