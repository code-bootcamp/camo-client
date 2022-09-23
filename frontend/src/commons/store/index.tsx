import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { v4 as uuidv4 } from "uuid";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const reservedState = atom({
  key: `reservedState/${uuidv4()}`,
  default: [],
});

export const searchKeyword = atom({
  key: "searchKeyword",
  default: "",
});
