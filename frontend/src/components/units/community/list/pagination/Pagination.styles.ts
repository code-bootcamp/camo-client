import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const Page = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin: 0px 10px;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  /* color: ${(props: IPageProps) => (props.isActive ? "white" : "black")}; */
  /* background-color: ${(props: IPageProps) => (props.isActive ? "#1e3932" : "white")}; */
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
`;

export const PageMoveBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
  background-color: white;
`;
