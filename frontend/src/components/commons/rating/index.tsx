import React, { useState } from "react";
import * as S from "./style";

export default function RatingPage() {
  const [click, setClick] = useState(false);
  const [star, setStar] = useState(0);

  const onChagneStar = (value: number) => {
    setStar(value);
    setClick(true);
    // setValue("star", value);
    // trigger("star");
  };

  return (
    <S.WrapTitle>
      <S.WrapStar>
        {click ? (
          <>
            <S.CommentTitle>내가 남긴 별점</S.CommentTitle>
            <S.Star>{star}.0</S.Star>
            <S.CommentTitle> 점</S.CommentTitle>
          </>
        ) : (
          <>
            <S.CommentTitle>이 카페를 방문하셨다면 평가해주세요 !</S.CommentTitle>
          </>
        )}
      </S.WrapStar>
      <S.Rates onChange={onChagneStar} value={star} />
    </S.WrapTitle>
  );
}
