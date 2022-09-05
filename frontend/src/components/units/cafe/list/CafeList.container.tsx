import { useRouter } from "next/router";
import CafeListUI from "./CafeList.presenter";

export default function CafeList() {
  const router = useRouter();
  const onClickDetail = (el: any) => (event) => {
    router.push(`/cafe/${el._cafeId}`);
  };

  return <CafeListUI onClickDetail={onClickDetail} />;
}
