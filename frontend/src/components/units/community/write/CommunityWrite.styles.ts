import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: #fff;
  padding: 10% 20%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 1rem;
  font-size: 2rem;
  :focus {
    outline: none;
  }
`;

export const TagInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 1rem;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  padding: 0 0 0 1rem;
  font-size: 1.2rem;
  :focus {
    outline: none;
  }
`;

export const AddressTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0 0 1rem 0;
`;

export const MapAddressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  margin-bottom: 3rem;
`;

export const MapWrapper = styled.div`
  width: 50%;
  padding: 2%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_92.png");
  background-size: cover;
`;

export const AddressWrapper = styled.div`
  width: 50%;
  padding: 2%;
`;

export const AddressInput = styled.input`
  width: 50%;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

export const AddressButton = styled.button`
  width: 5rem;
  height: 30px;
  border: none;
  background: #33413e;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  line-height: 1rem;
  text-align: center;
  margin-left: 0.3rem;
  cursor: pointer;
`;

export const AddressDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const AddressDetailInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 0.3rem;
`;

export const RegisterBtn = styled.button`
  width: 8rem;
  background: #5d7572;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;
