// 커뮤니티 게시글 디테일 페이지

import CommentList from "../../../src/components/units/community/comment/list/CommentList.container";
import CommentWrite from "../../../src/components/units/community/comment/write/CommentWrite.container";
import CommunityDetail from "../../../src/components/units/community/detail/CommunityDetail.container";

export default function CommunityDetailPage() {
  return (
    <>
      <CommunityDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}

// export default withAuth(CafeDetailPage[co]
