import { gql, useQuery } from "@apollo/client";

const ASD = gql`
  query fetchFavoriteUser($boardId: String!) {
    fetchFavoriteUser(boardId: $boardId) {
      board {
        likeCount
      }
    }
  }
`;
export default function LandingTemp() {
  const { data } = useQuery(ASD, {
    variables: {
      boardId: "2538bbe4-3245-41f9-ab27-0e08ce4b798f",
    },
  });
  console.log(data?.fetchFavoriteUser?.board?.likeCount);
  console.log(data);
  return (
    <>
      <div>asd</div>
    </>
  );
}
