import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}
export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 25%;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40%;
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const PageButton = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  /* margin-top: 5%; */
  border-radius: 100px;
  border: 3px solid black;
  text-align: center;
  cursor: pointer;
  color: ${(props: IPageProps) => (props.isActive ? "white" : "black")};
  background-color: ${(props: IPageProps) => (props.isActive ? "#cbb8ee" : "white")};
`;

export const SlideButton = styled.button`
  /* margin: 5%; */
  width: 30px;
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
  /* border: 3px solid black; */
  border-radius: 100px;
  background-color: ${(props: IPageProps) => (props.isActive ? "white" : "pink")};
`;
