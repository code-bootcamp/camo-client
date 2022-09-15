import styled from "@emotion/styled";

interface ICancelButtonProps {
  title?: String;
  onClick?: () => void;
  type?: (String & ("button" | "submit" | "reset")) | undefined;
}

const Button = styled.button`
  width: 16.25rem;
  height: 4rem;
  background-color: #f4f4f4;
  border: 1px solid #33413e;
  color: #33413e;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default function CancelButton(props: ICancelButtonProps) {
  return (
    <Button onClick={props.onClick} type={props.type}>
      {props.title}
    </Button>
  );
}
