// 카페 새글 등록하기

import CafeWrite from "../../../src/components/units/cafe/write/CafeWrite.container";

export default function CafeNewPage() {
  return <CafeWrite isEdit={false} />;
}

// export default withAuth(CafeNewPage)
