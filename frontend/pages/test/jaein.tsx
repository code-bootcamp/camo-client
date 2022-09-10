import { useState } from "react";
import LayoutSidebar from "../../src/components/commons/layout/sidebar/LayoutSidebar.container";

export default function Temp() {
  const data = [
    { id: 1, title: "이용약관 동의" },
    { id: 2, title: "개인정보 수집∙이용 동의" },
    { id: 3, title: "개인정보 수집∙이용 동의" },
  ];

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };
  return (
    <>
      <input
        type="checkbox"
        name="select-all"
        onChange={(e) => handleAllCheck(e.target.checked)}
        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
        checked={checkItems.length === data.length ? true : false}
      />
      {data?.map((data, key) => (
        <tr key={key}>
          <td>
            <input
              type="checkbox"
              name={`select-${data.id}`}
              onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={checkItems.includes(data.id) ? true : false}
            />
          </td>
          <td className="second-row">{data.title}</td>
        </tr>
      ))}
      {/* <LayoutSidebar /> */}
    </>
  );
}
