import styled from "@emotion/styled";

interface ISubmitButtonProps {
  title?: String;
  onClick?: () => void;
  type?: (String & ("button" | "submit" | "reset")) | undefined;
}

const SubmitButton = styled.button`
  /* width: 16.25rem;
  height: 4rem;
  background-color: #33413e;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer; */
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #1e3932;
  border: 0px none;
`;

export default function SubmitButtonFunc() {
  return <SubmitButton></SubmitButton>;
}
