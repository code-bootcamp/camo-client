import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import CommunityDetailUI from "./CommunityDetail.presenter";
import { FETCH_BOARD } from "./CommunityDetail.queries";

// declare const window: typeof globalThis & {
//   IMP: any
// }

export default function CommunityDetail() {
  // const router = useRouter();

  // const { register, handleSubmit, reset } = useForm({
  //   mode: "onChange",
  // });

  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: router.query.cafeId,
  //   },
  // });

  return <CommunityDetailUI />;
}
