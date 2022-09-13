import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      createdAt
      tags {
        id
        name
      }
      images {
        id
        url
      }
    }
  }
`;

export default function DetailTest() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "181135cc-961f-45d7-85cf-82595f3ee816" },
  });
  console.log(data);
  return (
    <>
      test
      <div>{data?.fetchBoard.title}</div>
      <div>{data?.fetchBoard.contents}</div>
      <div>{data?.fetchBoard.createdAt}</div>
    </>
  );
}
