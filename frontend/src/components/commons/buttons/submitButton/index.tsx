import styled from "@emotion/styled";

interface ISubmitButtonProps {
  title?: String;
  onClick?: () => void;
  type?: (String & ("button" | "submit" | "reset")) | undefined;
}

const Button = styled.button`
  width: 16.25rem;
  height: 4rem;
  background-color: #33413e;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default function SubmitButton(props: ISubmitButtonProps) {
  return (
    <Button onClick={props.onClick} type={props.type}>
      {props.title}
    </Button>
  );
}
