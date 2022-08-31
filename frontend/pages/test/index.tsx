import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export const CREATE_USER = gql`
  mutation createUser(
    $userEmail: String!
    $password: String!
    $name: String!
    $phoneNumber: String!
  ) {
    createUser(userEmail: $userEmail, password: $password, name: $name, phoneNumber: $phoneNumber) {
      id
      userEmail
      name
      nickName
    }
  }
`;

export default function TestPage() {
  const [createUser] = useMutation(CREATE_USER);

  const [inputs, setInputs] = useState({
    userEmail: "",
    password: "",
    name: "",
    phoneNumber: "",
  });

  const onClickGraphqlApi = async () => {
    try {
      const result = await createUser({
        variables: { ...inputs },
      });
      console.log(result);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const onChangeInputs = (event: any) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      이메일
      <input type="text" id="userEmail" onChange={onChangeInputs} /> <br />
      패스워드
      <input type="password" id="password" onChange={onChangeInputs} /> <br />
      이름
      <input type="text" id="name" onChange={onChangeInputs} /> <br />
      휴대폰번호
      <input type="text" id="phoneNumber" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickGraphqlApi}>회원가입</button>
    </>
  );
}
