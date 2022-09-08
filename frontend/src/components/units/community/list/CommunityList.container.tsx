import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";

export default function CommunityList() {
  const router = useRouter();

  const onClickDetail = (el: any) => (event) => {
    router.push(`/community/${el._comId}`);
  };

  return <CommunityListUI onClickDetail={onClickDetail} />;
}
