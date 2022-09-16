import Link from "next/link";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";

import * as S from "./CommunityDetail.styles";
import KakaoMapPage from "../../../commons/map/01";

export default function CommunityDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        {props.data?.fetchBoard.user?.id === props.UserData?.fetchLoginedUser.id ? (
          <>
            <S.EditIcon title="수정하기" onClick={props.onClickUpdate} />
            <S.DeleteIcon title="삭제하기" onClick={props.onClickDelete} />
          </>
        ) : (
          <></>
        )}
        <S.UserWrapper>
          <S.UserImg></S.UserImg>
          <S.UserInfoWrapper>
            <S.UserName>{props.data?.fetchBoard?.user?.nickName}</S.UserName>

            <S.PostWrapper>
              <S.PostDetail>{getDate(props.data?.fetchBoard?.createdAt)}</S.PostDetail>
              {/* <S.PostDetail>조회수</S.PostDetail>
              <S.PostDetail>댓글</S.PostDetail> */}
            </S.PostWrapper>
          </S.UserInfoWrapper>
        </S.UserWrapper>
      </S.TitleWrapper>
      <hr />
      <S.ContentsWrapper>
        <S.ImgWrapper>
          {props.data?.fetchBoard.images?.url !== "" ? (
            <S.MainImgWrapper>
              <S.MainImg
                src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]?.url}`}
                alt="이미지"
                onError={props.onErrorImg}
              />
            </S.MainImgWrapper>
          ) : (
            <></>
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
          주소 | {props.data?.fetchBoard.zipcode} {props.data?.fetchBoard?.address}
          {props.data?.fetchBoard.addressDetail}
        </S.AddressWrapper>
        <S.MapWrapper style={{ overflow: "hidden" }}>
          <KakaoMapPage
            data={props.data?.fetchBoard}
            address={props.data?.fetchBoard.zipcode as string}
          />
        </S.MapWrapper>

        <div>
          태그:
          {props.data?.fetchBoard.tags?.map((el: any) => (
            <div key={uuidv4()}>{`#${el.name}`}</div>
          ))}
        </div>
        <S.ContentsIcons>
          <S.CommentIcon />
          30
          <S.LikeIcon />
          70
        </S.ContentsIcons>
      </S.ContentsWrapper>
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
// {props.data?.fetchBoard.images
//   ?.filter((el: any) => el)
//   .map((el: any) => (
//     <S.SubImg key={el} src={`https://storage.googleapis.com/team04-storage/${el.url}`} />
//   ))}

// {props.data?.fetchBoard.images.map((el, i) => (
//   <S.SubImg key={el.id}>
//     <S.Img src={`${el[i]?.url}`} onError={props.onErrorImg} />
//   </S.SubImg>
// ))}
