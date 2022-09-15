import { gql, useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_CAFE_LIST = gql`
  query fetchCafeList($cafeListId: String!) {
    fetchCafeList(cafeListId: $cafeListId) {
      id
      title
      deposit
      user {
        id
        name
      }
    }
  }
`;

const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Int!) {
    createPayment(impUid: $impUid, amount: $amount) {
      impUid
      paymentDate
      paymentAmount
    }
  }
`;

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      name
      phoneNumber
    }
  }
`;

export default function Payment(props: any) {
  const router = useRouter();
  const [createPayment] = useMutation(CREATE_PAYMENT);
  const { data: UserData } = useQuery(FETCH_LOGINED_USER);
  const { data: CafeData } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: String(router.query.cafeId) },
  });

  const onClickPayment = async () => {
    const IMP = window.IMP;
    IMP.init("imp27128482");
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "CAMO",
        // 카페 리스트의 deposit을 가져와야함(props.deposit)
        amount: 100, // 최소 금액: 100원이라 100원 이상 결제해야 함
        buyer_email: UserData?.fetchLoginedUser.email,
        buyer_name: UserData?.fetchLoginedUser.name,
        buyer_tel: UserData?.fetchLoginedUser.phoneNumber,
        m_redirect_url: "http://localhost:3000/myPage/myReservation",
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 결제 성공 시 로직
          try {
            const result = await createPayment({
              variables: {
                impUid: String(rsp.imp_uid),
                // amount: CafeData?.fetchCafeList.deposit,
                amount: 100,
              },
            });
            console.log(result);
            // router.push("/myPage/myReservation");
          } catch (error) {
            console.log(error);
            alert(error);
            // location.reload();
          }
          // router.push("/myPage/myReservation");
          console.log(rsp);
        } else {
          // 결제 실패 시 로직
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}
