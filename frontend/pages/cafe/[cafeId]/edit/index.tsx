// 카페 글 수정하기
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CafeWrite from "../../../../src/components/units/cafe/write/CafeWrite.container";

export const FETCH_CAFE_LIST = gql`
  query fetchCafeList($cafeListId: String!) {
    fetchCafeList(cafeListId: $cafeListId) {
      id
      title
      contents
      zipcode
      address
      addressDetail
      phone
      startTime
      endTime
      homepage
      deposit
      createdAt
      remarks
      cafeListTag {
        id
        name
      }
      cafeListImage {
        id
        url
      }
      user {
        id
        name
      }
    }
  }
`;

// export const FETCH_CAFE_LIST = gql`
//   query fetchCafeList($cafeListId: String!) {
//     fetchCafeList(cafeListId: $cafeListId) {
//       id
//       title
//       contents
//       zipcode
//       address
//       addressDetail
//       phone
//       startTime
//       endTime
//       homepage
//       remarks
//       deposit
//       createdAt
//       cafeListTag {
//         id
//         name
//       }
//       cafeListImage {
//         id
//         url
//       }
//     }
//   }
// `;

export default function EditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: {
      cafeListId: router.query.cafeId as string,
    },
  });

  return <CafeWrite isEdit={true} data={data} />;
}
